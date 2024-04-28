using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IMahalleService
    {
        Task<IDataResult<List<Mahalle>>> GetAll();

        Task<IDataResult<Mahalle>> GetById(int mahalleId);
        Task<IDataResult<List<Mahalle>>> GetList();
        Task<IDataResult<List<Mahalle>>> GetListByCategory(int categoryId);

    }
}
