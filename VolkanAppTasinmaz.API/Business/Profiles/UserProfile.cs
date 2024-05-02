using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.Entities.Concrete;

namespace VolkanAppTasinmaz.API.Business.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile() : base()
        {
            CreateMap<UserOperationClaim, OperationClaim>()
               .ForMember(destination => destination.Id,
           options => options.MapFrom(source => source.OperationClaim.Id))
               .ForMember(destination => destination.Name,
           options => options.MapFrom(source => source.OperationClaim.Name));
        }
    }
}