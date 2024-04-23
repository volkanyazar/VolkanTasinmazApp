using Core.Utilities;
using Entities.Concrete;
using System.Collections.Generic;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Business.Abstract
{
    public interface ITasinmazService
    {
        Task<IDataResult<List<Tasinmaz>>> GetAll();

        Task<IDataResult<List<Log>>> GetAllLog();

        Task<IDataResult<Tasinmaz>> GetById(int tasinmazId);

        Task<IDataResult<List<Tasinmaz>>> GetByUserId(int userId);


        Task<IResult> Add(Tasinmaz tasinmaz);

        Task<IResult> AddLog(Log log);

        Task<IResult> Update(Tasinmaz tasinmaz);

        Task<IResult> Delete(int tasinmazId);

    }
}
