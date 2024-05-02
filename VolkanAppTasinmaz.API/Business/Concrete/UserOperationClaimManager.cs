using AutoMapper;
using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using DataAccess.Concrete.EntityFramework;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    class UserOperationClaimManager : IUserOperationClaimService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        
        public UserOperationClaimManager(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IResult> AddUserClaim(UserOperationClaim userOperationClaim)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted))
            {
                try
                {
                    await _context.UserOperationClaims.AddAsync(userOperationClaim);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return new SuccessResult("Kullanıcı Yetki Bilgileri Eklendi");
                }
                catch (Exception e)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult("Kullanıcı Yetki Ekleme Başarısız: Hata Mesajı : " + e.Message);
                }
            }
        }

        public async Task<IResult> UpdateUserClaim(UserOperationClaim userOperationClaim)
        {
            try
            {
                var userOperationClaimData = await _context.UserOperationClaims.Include(x => x.OperationClaim).FirstOrDefaultAsync(k => k.Id == userOperationClaim.Id);
                if (userOperationClaimData != null)
                {
                    _mapper.Map(userOperationClaim, userOperationClaimData);
                    _context.Update(userOperationClaimData);
                    await _context.SaveChangesAsync();
                    return new SuccessResult("Kullanıcı İçin Yetki Başarıyla Güncellendi...");
                }
                else
                {
                    return new ErrorResult("Güncelleme için belirtilen ilgili yetki bulunamadı.");
                }
            }
            catch (Exception e)
            {
                return new ErrorResult("Kullanıcı Yetki Güncelleme Başarısız: Hata Mesajı : " + e.Message);
            }
        }

        public async Task<IDataResult<List<UserOperationClaim>>> GetAll()
        {
            try
            {
                var tempList = await _context.UserOperationClaims.Include(x => x.OperationClaim).OrderBy(x => x.Id).ToListAsync();
                return new SuccessDataResult<List<UserOperationClaim>>(tempList, "Kullanıcı Yetkileri Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<UserOperationClaim>>(null, "Kullanıcı Yetkileri Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IResult> DeleteUserClaim(int userOperationClaimUserId)
        {
            try
            {
                var userOperationToDelete = await _context.UserOperationClaims.FirstOrDefaultAsync(x => x.UserId == userOperationClaimUserId);

                if (userOperationToDelete == null)
                {
                    return new ErrorResult("Kullanıcı Yetki Bulunamadı");
                }
                _context.UserOperationClaims.Remove(userOperationToDelete);
                await _context.SaveChangesAsync();
                return new SuccessResult("Kullanıcı Yetki Bilgileri Silindi.");
            }
            catch (Exception e)
            {
                return new ErrorResult("Kullanıcı Yetki  Silme İşlemi Başarısız : Hata Mesajı : " + e.Message);
            }
        }

        public async Task<IDataResult<UserOperationClaim>> GetOperationClaimByUserId(int userId)
        {
            try
            {
                var tempData = await _context.UserOperationClaims.FirstOrDefaultAsync(x => x.UserId == userId);
                return new SuccessDataResult<UserOperationClaim>(tempData, "Kullanıcı Idye Göre Yetki Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<UserOperationClaim>(null, "Kullanıcı Idye Göre Yetki Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
    }
}
