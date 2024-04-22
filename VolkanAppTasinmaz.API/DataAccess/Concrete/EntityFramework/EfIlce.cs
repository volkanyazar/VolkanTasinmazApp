using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfIlce : EfEntityRepositoryBase<Ilce, Context>, IIlceDal
    {

        public List<IlceDetailDto> GetIlceDetails()
        {
            using (Context context = new Context())
            {
                var result = from ilce in context.Ilce
                             join il in context.Il on ilce.IlId equals il.IlId
                             select new IlceDetailDto
                             {
                                 Iid = ilce.IlceId,
                                 Iname = ilce.IlceName,
                                 SId = il.IlId
                             };

                return result.ToList();
            }
        }
    }
}
