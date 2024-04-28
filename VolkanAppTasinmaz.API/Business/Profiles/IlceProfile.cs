using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Business.Profiles
{
    public class IlceProfile : Profile
    {
        public IlceProfile() : base()
        {
            CreateMap<Ilce, IlceDetailDto>()
               .ForMember(destination => destination.IlceId,
           options => options.MapFrom(source => source.IlceId))
               .ForMember(destination => destination.IlceAdi,
           options => options.MapFrom(source => source.IlceName))
               .ForMember(destination => destination.IlId,
           options => options.MapFrom(source => source.IlId));
        }
    }
}