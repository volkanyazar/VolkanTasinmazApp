using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using Core.Utilities.Security.JWT;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace WebAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        private readonly ITasinmazService _tasinmazService;
        private readonly IUserService _userService;

        public AuthController(IAuthService authService, ITasinmazService productService, IUserService userService)
        {
            _authService = authService;
            _tasinmazService = productService;
            _userService = userService;
        }
        [HttpPost("login")]
        public async Task<IDataResult<AccessToken>> Login(UserForLoginDto userForLoginDto)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _authService.Login(userForLoginDto);
            var user = await _userService.GetByMail(userForLoginDto.Email);
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Sisteme Giriş Yapıldı",
                durum = true,
                islemtipi = "Login İşlemi",
                tarih = DateTime.Now,
                userid = user.Data.UserId,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return result;
        }

        [HttpPost("register")]
        public async Task<IDataResult<AccessToken>> Register(UserForRegisterDto userForRegisterDto)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _authService.Register(userForRegisterDto, userForRegisterDto.Password);
            var user = await _userService.GetByMail(userForRegisterDto.Email);
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kullanıcı Eklendi",
                durum = true,
                islemtipi = "Kullanıcı Ekleme İşlemi",
                tarih = DateTime.Now,
                userid = user.Data.UserId,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return result;
        }
    }
}
