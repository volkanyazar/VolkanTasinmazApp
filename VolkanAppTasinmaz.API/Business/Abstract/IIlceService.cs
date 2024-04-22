using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Abstract
{
    public interface IIlceService
    {
        IDataResult<List<Ilce>> GetAll();

        IDataResult<Ilce> GetById(int Iid);
        IDataResult<List<Ilce>> GetList();
        IDataResult<List<IlceDetailDto>> GetIlceDetails();

        IDataResult<List<Ilce>> GetListByCategory(int categoryId);

        IDataResult<List<Ilce>> GetByIlID(int id);

    }
}
