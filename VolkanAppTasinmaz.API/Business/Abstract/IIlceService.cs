using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Abstract
{
    public interface IIlceService
    {
        Task<IDataResult<List<Ilce>>> GetAll();

        Task<IDataResult<Ilce>> GetById(int ilceId);
        Task<IDataResult<List<Ilce>>> GetList();
        Task<IDataResult<List<IlceDetailDto>>> GetIlceDetails();

        Task<IDataResult<List<Ilce>>> GetListByCategory(int categoryId);

        Task<IDataResult<Ilce>> GetByIlId(int ilId);

    }
}
