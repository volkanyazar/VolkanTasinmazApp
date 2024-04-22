using Business.Abstract;
using Core.Utilities;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class IlManager : IIlService
    {
        IIlDal _ilDal;

        public IlManager(IIlDal sehirDal)
        {
            _ilDal = sehirDal;
        }
        public IDataResult<List<Il>> GetAll()
        {
            return new SuccessDataResult<List<Il>>(_ilDal.GetAll(), "İller Başarıyla Listelendi");
        }
    }
}
