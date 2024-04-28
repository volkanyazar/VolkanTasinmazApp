using AutoMapper;
using Business.Abstract;
using Core.Utilities;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Concrete
{
    public class IlceManager : IIlceService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public IlceManager(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IDataResult<List<Ilce>>> GetAll()
        {
            try
            {
                var tempList = await _context.Ilce.Include(x => x.Il).OrderBy(x => x.IlceId).ToListAsync();
                return new SuccessDataResult<List<Ilce>>(tempList, "llçeler Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Ilce>>(null, "İlçeler Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<Ilce>> GetById(int ilceId)
        {
            try
            {
                var tempData = await _context.Ilce.Include(x => x.Il).Where(x => x.IlceId == ilceId).FirstOrDefaultAsync();
                return new SuccessDataResult<Ilce>(tempData, "İlçe Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<Ilce>(null, "İlçe Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<Ilce>> GetByIlId(int ilId)
        {
            try
            {
                var tempData = await _context.Ilce.Include(x => x.Il).Where(x => x.IlId == ilId).FirstOrDefaultAsync();
                return new SuccessDataResult<Ilce>(tempData, "İlçe Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<Ilce>(null, "İlçe Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<Ilce>>> GetList()
        {
            try
            {
                var tempList = await _context.Ilce.Include(x => x.Il).OrderBy(x => x.IlceId).ToListAsync();
                return new SuccessDataResult<List<Ilce>>(tempList, "llçeler Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Ilce>>(null, "İlçeler Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<Ilce>>> GetListByCategory(int categoryId)
        {
            try
            {
                var tempData = await _context.Ilce.Include(x => x.Il).Where(x => x.IlId == categoryId).ToListAsync();
                return new SuccessDataResult<List<Ilce>>(tempData, "İlçe Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Ilce>>(null, "İlçe Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<IlceDetailDto>>> GetIlceDetails()
        {
            try
            {
                // var tempData = await _context.Ilce.Include(x => x.Il).Select(u => new IlceDetailDto { IlceId = u.IlceId, IlceAdi = u.IlceName, IlId = u.IlId }).ToListAsync();
                var tempData = _context.Ilce.Include(x => x.Il);
                var ilceDetailsData = await _mapper.ProjectTo<IlceDetailDto>(tempData).ToListAsync();

                return new SuccessDataResult<List<IlceDetailDto>>(ilceDetailsData, "İlçeler Detay Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<IlceDetailDto>>(null, "İlçeler Detay Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

    }
}
