using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess;
using Core.Utilities;
using Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace DataAccess.Abstract
{
    public interface IIlceDal : IEntityRepository<Ilce>
    {
        List<IlceDetailDto> GetIlceDetails();
    }
}
