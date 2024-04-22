using Business.Abstract;
using Core.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace Business.Concrete
{
    
    public class MahalleManager : IMahalleService
    {

        IMahalleDal _mahalleDal;

        public MahalleManager(IMahalleDal mahalleDal)
        {
            _mahalleDal = mahalleDal;
        }
        public IDataResult<List<Mahalle>> GetAll()
        {
            return new SuccessDataResult<List<Mahalle>>(_mahalleDal.GetAll(), "Mahalleler Başarıyla Listelendi");
        }

        public IDataResult<Mahalle> GetById(int Iid)
        {
            throw new NotImplementedException();
        }

        public IDataResult<List<Mahalle>> GetList()
        {
            throw new NotImplementedException();
        }

        public IDataResult<List<Mahalle>> GetListByCategory(int categoryId)
        {
            return new SuccessDataResult<List<Mahalle>>(_mahalleDal.GetList(p => p.IlceId == categoryId).ToList());
        }
    }
}
