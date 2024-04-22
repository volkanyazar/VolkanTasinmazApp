using Business.Abstract;
using Core.Entities.Concrete;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace WebAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private IAuthService _authService;
        ITasinmazService _tasinmazService;
        IUserService _userService;
        IUserOperationClaimService _userOperationClaimService;

        public AuthController(IAuthService authService, ITasinmazService productService, IUserService userService, IUserOperationClaimService userOperationClaimService)
        {
            _authService = authService;
            _tasinmazService = productService;
            _userService = userService;
            _userOperationClaimService = userOperationClaimService; 

        }

        [HttpPost("login")]
        public ActionResult Login(UserForLoginDto userForLoginDto)
        {

            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);
            var userToLogin = _authService.Login(userForLoginDto);
            if (!userToLogin.Success)
            {
                return BadRequest(userToLogin.Message);
            }

            var result = _authService.CreateAccessToken(userToLogin.Data);
            if (result.Success)
            {
                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Sisteme Giriş Yapıldı",
                    durum = true,
                    islemtipi = "Login İşlemi",
                    tarih = DateTime.Now,
                    userid = userToLogin.Data.UserId,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });

                return Ok(result);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("register")]
        public ActionResult Register(UserForRegisterDto userForRegisterDto)
        {

            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);
            var userExists = _authService.UserExists(userForRegisterDto.Email);
            if (!userExists.Success)
            {
                return BadRequest(userExists.Message);
            }

            var registerResult = _authService.Register(userForRegisterDto, userForRegisterDto.Password);
            var result = _authService.CreateAccessToken(registerResult.Data);
            if (result.Success)
            {
                _userOperationClaimService.AddUserClaim(new UserOperationClaim
                {
                    UserId = registerResult.Data.UserId,
                    OperationClaimId = userForRegisterDto.Role == "Admin" ? 1 : 2
                });

                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kullanıcı Eklendi",
                    durum = true,
                    islemtipi = "Kullanıcı Ekleme İşlemi",
                    tarih = DateTime.Now,
                    userid = user.UserId,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });

                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        


    }
}
