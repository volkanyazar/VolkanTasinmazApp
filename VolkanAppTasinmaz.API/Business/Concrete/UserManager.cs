using AutoMapper;
using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using Core.Utilities.Security.Hashing;
using DataAccess.Concrete.EntityFramework;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        private readonly IUserOperationClaimService _userOperationClaimService;

        public UserManager(Context context, IMapper mapper, IUserOperationClaimService userOperationClaimService)
        {
            _context = context;
            _mapper = mapper;
            _userOperationClaimService = userOperationClaimService;
        }
        public async Task<IDataResult<List<OperationClaim>>> GetClaims(User user)
        {
            try
            {
                // var tempData = await _context.UserOperationClaims.Include(x => x.OperationClaim).Where(x => x.UserId == user.UserId).Select(u => new OperationClaim { Id = u.OperationClaim.Id, Name = u.OperationClaim.Name }).ToListAsync();
                var tempData = _context.UserOperationClaims.Include(x => x.OperationClaim).Where(x => x.UserId == user.UserId);
                var userOperationData = await _mapper.ProjectTo<OperationClaim>(tempData).ToListAsync();

                return new SuccessDataResult<List<OperationClaim>>(userOperationData, "Kullanıcı Yetki Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<OperationClaim>>(null, "Kullanıcı Yetki Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IResult> Add(User user)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted))
            {
                try
                {
                    await _context.Users.AddAsync(user);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return new SuccessResult("Kullanıcı Başarıyla Eklendi");
                }
                catch (Exception e)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult("Kullanıcı Ekleme Başarısız: Hata Mesajı : " + e.Message);
                }
            }
        }

        public async Task<IDataResult<List<User>>> GetAll()
        {
            try
            {
                var tempList = await _context.Users.OrderByDescending(x => x.UserId).ToListAsync();
                return new SuccessDataResult<List<User>>(tempList, "Kullanıcılar Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<User>>(null, "Kullanıcı Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<User>> GetById(int userId)
        {
            try
            {
                var tempData = await _context.Users.FirstOrDefaultAsync(x => x.UserId == userId);
                return new SuccessDataResult<User>(tempData, "Kullanıcı Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<User>(null, "Kullanıcı Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<User>> GetByMail(string email)
        {
            try
            {
                var tempData = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
                return new SuccessDataResult<User>(tempData, "Kullanıcı Bilgileri Emaile göre Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<User>(null, "Emaile göre Kullanıcı Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IResult> Delete(User user)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted))
            {
                try
                {
                    var userToDelete = await _context.Users.FirstOrDefaultAsync(x => x.UserId == user.UserId);

                    if (userToDelete == null)
                    {
                        await transaction.RollbackAsync();
                        return new ErrorResult("Kullanıcı Bulunamadı");
                    }
                    _context.Users.Remove(userToDelete);
                    await _userOperationClaimService.DeleteUserClaim(user.UserId);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return new SuccessResult(user.FirstName + " Kullanıcısı Başarıyla Silindi...");
                }
                catch (Exception e)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult("Kullanıcı Silme İşlemi Başarısız : Hata Mesajı : " + e.Message);
                }
            }
        }

        public async Task<IResult> UpdateUser(UserUpdateDto userUpdateDto)
        {
            var userResult = await GetById(userUpdateDto.UserId);
            if (!userResult.Success)
            {
                return new ErrorResult(userResult.Message);
            }

            if (!HashingHelper.VerifyPasswordHash(userUpdateDto.ActivePassword, userResult.Data.PasswordHash, userResult.Data.PasswordSalt))
            {
                return new ErrorResult("Şifre hatalı");
            }

            if (userResult.Data.Email != userUpdateDto.Email)
            {
                if (await GetByMail(userUpdateDto.Email) != null)
                {
                    return new ErrorResult("Kullanıcı zaten mevcut");
                }
            }

            userResult.Data.FirstName = userUpdateDto.FirstName;
            userResult.Data.LastName = userUpdateDto.LastName;
            userResult.Data.Email = userUpdateDto.Email;


            if (userUpdateDto.NewPassword.Length > 5)
            {
                HashingHelper.CreatePasswordHash(userUpdateDto.NewPassword, out byte[] passwordHash, out byte[] passwordSalt);
                userResult.Data.PasswordHash = passwordHash;
                userResult.Data.PasswordSalt = passwordSalt;
            }

            try
            {
                await Update(userResult.Data);
                return new SuccessResult("Kullanıcı Güncelleme Başarılı");
            }
            catch (Exception)
            {
                return new ErrorResult("Kullanıcı Güncelleme Başarısız");
            }
        }

        public async Task<IDataResult<User>> GetByIdLogin(int userId)
        {
            try
            {
                var tempData = await _context.Users.FirstOrDefaultAsync(x => x.UserId == userId);
                return new SuccessDataResult<User>(tempData, "Kullanıcı Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<User>(null, "Kullanıcı Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<User>> GetUserById(int userId)
        {
            try
            {
                var tempData = await _context.Users.FirstOrDefaultAsync(x => x.UserId == userId);
                return new SuccessDataResult<User>(tempData, "Kullanıcı Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<User>(null, "Kullanıcı Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IResult> Update(User user)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted))
            {
                var userResult = await GetById(user.UserId);
                if (!userResult.Success)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult(userResult.Message);
                }

                if (userResult.Data.Email != user.Email)
                {
                    if (await GetByMail(user.Email) != null)
                    {
                        await transaction.RollbackAsync();
                        return new ErrorResult("Kullanıcı zaten mevcut");
                    }
                }

                userResult.Data.FirstName = user.FirstName;
                userResult.Data.LastName = user.LastName;
                userResult.Data.Email = user.Email;
                userResult.Data.Role = user.Role;
                userResult.Data.Adres = user.Adres;

                if (!string.IsNullOrEmpty(user.NewPassword))
                {
                    // Yeni parolayı hash'le ve güncelle
                    HashingHelper.CreatePasswordHash(user.NewPassword, out byte[] passwordHash, out byte[] passwordSalt);
                    userResult.Data.PasswordHash = passwordHash;
                    userResult.Data.PasswordSalt = passwordSalt;
                }

                try
                {
                    var userOperationClaimData = await _userOperationClaimService.GetOperationClaimByUserId(user.UserId);
                    var updatedUserOperationData = userOperationClaimData.Data;

                    updatedUserOperationData.UserId = user.UserId;
                    updatedUserOperationData.OperationClaimId = user.Role == "Admin" ? 1 : 2;
                    await _userOperationClaimService.UpdateUserClaim(updatedUserOperationData);

                    _context.Update(userResult.Data);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return new SuccessResult("Kullanıcı Güncelleme Başarılı");
                }
                catch (Exception)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult("Kullanıcı Güncelleme Başarısız");
                }
            }
        }

        public async Task<IResult> Delete(int userId)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted))
            {
                try
                {
                    var userToDelete = await _context.Users.FirstOrDefaultAsync(x => x.UserId == userId);

                    if (userToDelete == null)
                    {
                        await transaction.RollbackAsync();
                        return new ErrorResult("Kullanıcı Bulunamadı");
                    }
                    _context.Users.Remove(userToDelete);
                    await _userOperationClaimService.DeleteUserClaim(userToDelete.UserId);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return new SuccessResult(userToDelete.FirstName + " Kullanıcısı Başarıyla Silindi...");
                }
                catch (Exception e)
                {
                    await transaction.RollbackAsync();
                    return new ErrorResult("Kullanıcı Silme İşlemi Başarısız : Hata Mesajı : " + e.Message);
                }
            }
        }
    }
}
