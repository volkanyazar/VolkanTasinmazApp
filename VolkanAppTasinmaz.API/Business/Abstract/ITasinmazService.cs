using Core.Utilities;
using Entities.Concrete;
using System.Collections.Generic;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Business.Abstract
{
    public interface ITasinmazService
    {
        IDataResult<List<Tasinmaz>> GetAll();

        IDataResult<List<Log>> GetAllLog();

        IDataResult<List<Tasinmaz>> GetListByIl(int Sid);
        IDataResult<List<TasinmazDetailDto>> GetTasinmazDetails();

        IDataResult<Tasinmaz> GetById(int tasinmazId);

        IDataResult<List<Tasinmaz>> GetByUserId(int userId);


        IResult Add(Tasinmaz tasinmaz);

        IResult AddLog(Log log);

        IResult Update(Tasinmaz tasinmaz);

        IResult Delete(int tasinmazId);

    }
}
