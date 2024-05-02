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
    public class IlManager : IIlService
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public IlManager(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IDataResult<List<Il>>> GetAll()
        {
            try
            {
                var tempList = await _context.Il.OrderBy(x => x.IlId).ToListAsync();
                return new SuccessDataResult<List<Il>>(tempList, "İller Başarıyla Listelendi...");
            }
            catch (Exception e)
            {
                return new ErrorDataResult<List<Il>>(null, "İller Listeleme Başarısız: Hata Mesajı: " + e.Message);
            }
        }
    }
}
