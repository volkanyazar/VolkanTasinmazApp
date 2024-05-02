using Core.Entities.Concrete;
using Core.Utilities;
using Core.Utilities.Security.JWT;
using System;
using System.Text;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Abstract
{
    public interface IAuthService
    {
        Task<IDataResult<AccessToken>> Register(UserForRegisterDto userForRegisterDto, string password);
        Task<IDataResult<AccessToken>> Login(UserForLoginDto userForLoginDto);
        Task<IResult> UserExists(string email);
        Task<IDataResult<AccessToken>> CreateAccessToken(User user);
    }
}
