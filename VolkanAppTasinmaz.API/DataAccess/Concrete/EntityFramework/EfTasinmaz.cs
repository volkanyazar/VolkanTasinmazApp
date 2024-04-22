using Core.DataAccess.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using Core.Utilities;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfTasinmaz : EfEntityRepositoryBase<Tasinmaz, Context>, ITasinmazDal
    {
        public List<TasinmazDetailDto> GetTasinmazDetails()
        {
            using (Context context = new Context())

            {
                var result = from p in context.Tasinmazlar
                             join c in context.Users
                             on p.UserId equals c.UserId
                             select new TasinmazDetailDto
                             {
                                 TasinmazId = p.TasinmazId,
                                 Il = p.Il,
                                 UserId = c.UserId,
                                 Ilce = p.Ilce
                             };
                return result.ToList();

            }
        }
        public List<Tasinmaz> GetAllTasinmaz()
        {
            using (Context context = new Context())
            {
                return context.Tasinmazlar.Include(x => x.Mahalle).ThenInclude(q => q.Ilce).ThenInclude(k => k.Il).Include(f=>f.User).ToList();
                //return context.Tasinmaz.Include(x => x.Mahalle).ThenInclude(c => c.).ThenInclude(g => g.Sehir).ToList();
                //ThenInclude(c => c.Countries).ThenInclude(o => o.Provinces)

            }
        }
    }
}
