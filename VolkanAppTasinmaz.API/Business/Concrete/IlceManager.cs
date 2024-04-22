using Business.Abstract;
using Core.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Concrete
{
    public class IlceManager : IIlceService
    {
        IIlceDal _ilceDal;

        public IlceManager(IIlceDal ilceDal)
        {
            _ilceDal = ilceDal;
        }
        public IDataResult<List<Ilce>> GetAll()
        {
            return new SuccessDataResult<List<Ilce>>(_ilceDal. GetAll(), "İlçeler Başarıyla Listelendi");
        }

        public IDataResult<Ilce> GetById(int Iid)
        {
            return new SuccessDataResult<Ilce>(_ilceDal.Get(p => p.IlceId == Iid));
        }

        public IDataResult<List<Ilce>> GetByIlID(int id)
        {
            return new SuccessDataResult<List<Ilce>>(_ilceDal.GetAll(c => c.IlId == id));
        }

        public IDataResult<List<Ilce>> GetList()
        {
            
            return new SuccessDataResult<List<Ilce>>(_ilceDal.GetList().ToList());
        }

        public IDataResult<List<Ilce>> GetListByCategory(int categoryId)
        {
            return new SuccessDataResult<List<Ilce>>(_ilceDal.GetList(p => p.IlId == categoryId).ToList());
        }

        public IDataResult<List<IlceDetailDto>> GetIlceDetails()
        {
            return new SuccessDataResult<List<IlceDetailDto>>(_ilceDal.GetIlceDetails());
        }

    }
}
