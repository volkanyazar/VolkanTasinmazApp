using AutoMapper;
using Entities.Concrete;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Profiles
{
    public class TasinmazProfile : Profile
    {
        public TasinmazProfile() : base()
        {
            CreateMap<Tasinmaz, Tasinmaz>();
        }
    }
}