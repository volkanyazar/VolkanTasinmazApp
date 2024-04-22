using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IMahalleService
    {
        IDataResult<List<Mahalle>> GetAll();

        IDataResult<Mahalle> GetById(int Iid);
        IDataResult<List<Mahalle>> GetList();
        IDataResult<List<Mahalle>> GetListByCategory(int categoryId);

    }
}
