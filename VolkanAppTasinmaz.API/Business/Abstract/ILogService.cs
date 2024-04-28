using Core.Utilities;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ILogService
    {
        Task<IResult> Add(Log log);
        Task<IDataResult<List<Log>>> GetAll();


    }
}
