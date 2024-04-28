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
namespace Business.Concrete
{

    public class MahalleManager : IMahalleService
    {

        private readonly Context _context;
        private readonly IMapper _mapper;

        public MahalleManager(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IDataResult<List<Mahalle>>> GetAll()
        {
            try
            {
                var tempList = await _context.Mahalle.Include(x => x.Ilce).ThenInclude(x => x.Il).OrderBy(x => x.MahalleId).ToListAsync();
                return new SuccessDataResult<List<Mahalle>>(tempList, "Mahalleler Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Mahalle>>(null, "Mahalleler Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<Mahalle>> GetById(int mahalleId)
        {
            try
            {
                var tempData = await _context.Mahalle.Include(x => x.Ilce).ThenInclude(x => x.Il).Where(x => x.MahalleId == mahalleId).FirstOrDefaultAsync();
                return new SuccessDataResult<Mahalle>(tempData, "Mahalle Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<Mahalle>(null, "Mahalle Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<Mahalle>>> GetList()
        {
            try
            {
                var tempList = await _context.Mahalle.Include(x => x.Ilce).ThenInclude(x => x.Il).OrderBy(x => x.MahalleId).ToListAsync();
                return new SuccessDataResult<List<Mahalle>>(tempList, "Mahalleler Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Mahalle>>(null, "Mahalleler Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }

        public async Task<IDataResult<List<Mahalle>>> GetListByCategory(int categoryId)
        {
            try
            {
                var tempData = await _context.Mahalle.Include(x => x.Ilce).ThenInclude(x => x.Il).Where(x => x.IlceId == categoryId).ToListAsync();
                return new SuccessDataResult<List<Mahalle>>(tempData, "Mahalle Bilgileri Başarıyla Getirildi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Mahalle>>(null, "Mahalle Getirme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
    }
}
