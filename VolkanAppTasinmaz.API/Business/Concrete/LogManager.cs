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
    public class LogManager : ILogService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public LogManager(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IDataResult<List<Log>>> GetAll()
        {
            try
            {
                var tempList = await _context.Log.OrderByDescending(x => x.logid).ToListAsync();
                return new SuccessDataResult<List<Log>>(tempList, "Loglar Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Log>>(null, "Loglar Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }

        }

        public async Task<IResult> Add(Log log)
        {
            try
            {
                await _context.Log.AddAsync(log);
                await _context.SaveChangesAsync();
                return new SuccessResult("Log Başarıyla Eklendi");
            }
            catch (Exception e)
            {
                return new ErrorResult("Log Ekleme Başarısız: Hata Mesajı : " + e.Message);
            }

        }
    }


}
