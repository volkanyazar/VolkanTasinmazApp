using AutoMapper;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Utilities;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Business.Concrete
{
    public class TasinmazManager : ITasinmazService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public TasinmazManager(Context context)
        {
            _context = context;
        }
        [ValidationAspect(typeof(TasinmazValidator))]

        public async Task<IResult> Add(Tasinmaz tasinmaz)
        {
            try
            {
                await _context.Tasinmazlar.AddAsync(tasinmaz);
                await _context.SaveChangesAsync();
                return new SuccessResult("Taşınmaz Başarıyla Eklendi");
            }
            catch (Exception e)
            {
                return new ErrorResult("Taşınmaz Ekleme Başarısız: Hata Mesajı : " + e.Message);
            }
        }

        public async Task<IResult> AddLog(Log log)
        {
            try
            {
                await _context.Log.AddAsync(log);
                await _context.SaveChangesAsync();
                return new SuccessResult("Taşınmaz Log Eklendi");
            }
            catch (Exception e)
            {
                return new ErrorResult("Taşınmaz Log Ekleme Başarısız: Hata Mesajı : " + e.Message);
            }
        }

        public async Task<IResult> Delete(int tasinmazId)
        {
            try
            {
                var tasinmazToDelete = await _context.Tasinmazlar.Include(x => x.User).Include(x => x.Mahalle).ThenInclude(x => x.Ilce).ThenInclude(x => x.Il).Where(x => x.TasinmazId == tasinmazId).FirstOrDefaultAsync();

                if (tasinmazToDelete == null)
                {
                    return new ErrorResult("Taşınmaz Bulunamadı");
                }
                _context.Tasinmazlar.Remove(tasinmazToDelete);
                await _context.SaveChangesAsync();
                return new SuccessResult("Taşınmaz Başarıyla Silindi...");
            }
            catch (Exception e)
            {
                return new ErrorResult("Taşınmaz Silme İşlemi Başarısız : Hata Mesajı : " + e.Message);
            }
        }

        public async Task<IDataResult<List<Tasinmaz>>> GetAll()
        {
            try
            {
                var tempList = await _context.Tasinmazlar.Include(x => x.User).Include(x => x.Mahalle).ThenInclude(x => x.Ilce).ThenInclude(x => x.Il).OrderBy(x => x.TasinmazId).ToListAsync();
                return new SuccessDataResult<List<Tasinmaz>>(tempList, "Taşınmazlar Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Tasinmaz>>(null, "Taşınmaz Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
        public async Task<IDataResult<List<Tasinmaz>>> GetByUserId(int userId)
        {
            try
            {
                var tempList = await _context.Tasinmazlar.Include(x => x.User).Include(x => x.Mahalle).ThenInclude(x => x.Ilce).ThenInclude(x => x.Il).Where(x => x.UserId == userId).OrderBy(x => x.TasinmazId).ToListAsync();
                return new SuccessDataResult<List<Tasinmaz>>(tempList, "Taşınmazlar Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Tasinmaz>>(null, "Taşınmaz Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<Log>>> GetAllLog()
        {
            try
            {
                var tempList = await _context.Log.OrderByDescending(x => x.logid).ToListAsync();
                return new SuccessDataResult<List<Log>>(tempList, "Taşınmazlar Logları Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Log>>(null, "Taşınmaz Loglarını Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
        public async Task<IDataResult<Tasinmaz>> GetById(int tasinmazId)
        {
            try
            {
                var tempData = await _context.Tasinmazlar.Include(x => x.User).Include(x => x.Mahalle).ThenInclude(x => x.Ilce).ThenInclude(x => x.Il).Where(x => x.TasinmazId == tasinmazId).FirstOrDefaultAsync();
                return new SuccessDataResult<Tasinmaz>(tempData, "Taşınmazın Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<Tasinmaz>(null, "Taşınmaz Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
        public async Task<IResult> Update(Tasinmaz tasinmaz)
        {
            try
            {
                var tasinmazData = await _context.Tasinmazlar.Include(x => x.User).Include(x => x.Mahalle).ThenInclude(x => x.Ilce).ThenInclude(x => x.Il).FirstOrDefaultAsync(k => k.TasinmazId == tasinmaz.TasinmazId);
                if (tasinmazData != null)
                {
                    tasinmazData.Ada = tasinmaz.Ada;
                    tasinmazData.Adres = tasinmaz.Adres;
                    tasinmazData.coorX = tasinmaz.coorX;
                    tasinmazData.coorY = tasinmaz.coorY;
                    tasinmazData.Il = tasinmaz.Il;
                    tasinmazData.Ilce = tasinmaz.Ilce;
                    tasinmazData.MahalleId = tasinmaz.MahalleId;
                    tasinmazData.Nitelik = tasinmaz.Nitelik;
                    tasinmazData.Parsel = tasinmaz.Parsel;
                    tasinmazData.TasinmazId = tasinmaz.TasinmazId;
                    tasinmazData.UserId = tasinmaz.UserId;

                    _context.Update(tasinmazData);
                    await _context.SaveChangesAsync();
                    return new SuccessResult("Taşınmaz Başarıyla Güncellendi...");
                }
                else
                {
                    return new ErrorResult("Güncelleme için belirtilen taşınmaz bulunamadı.");
                }
            }
            catch (Exception e)
            {
                return new ErrorResult("Taşınmaz Güncelleme Başarısız: Hata Mesajı : " + e.Message);
            }
        }
    }
}
