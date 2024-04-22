using Core.DataAccess;
using Core.Utilities;
using System.Collections.Generic;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.DataAccess.Abstract
{
    public interface ITasinmazDal : IEntityRepository<Tasinmaz>
    {
        List<TasinmazDetailDto> GetTasinmazDetails();
        List<Tasinmaz> GetAllTasinmaz();
    }
}
