using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace WebAPI.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ITasinmazService _tasinmazService;
        private readonly IUserService _userService;
        public UserController(IUserService userService, ITasinmazService productService)
        {
            _userService = userService;
            _tasinmazService = productService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<User>>> GetAll()
        {
            return await _userService.GetAll();
        }

        [HttpDelete("delete/{id}")]
        public async Task<IResult> DeleteUser(int id)
        {
            var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Silindi",
                durum = true,
                islemtipi = "Kullanıcı Silme İşlemi",
                tarih = DateTime.Now,
                userid = userId,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _userService.Delete(id);
        }

        [HttpPost("delete")]
        public async Task<IResult> Delete(User user)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Silindi",
                durum = true,
                islemtipi = "Kullanıcı Silme İşlemi Spesifik",
                tarih = DateTime.Now,
                userid = id,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _userService.Delete(user);
        }

        [HttpPut("update")]
        public async Task<IResult> Update(User user)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Güncellendi",
                durum = true,
                islemtipi = "Kullanıcı Güncelleme İşlemi",
                tarih = DateTime.Now,
                userid = id,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _userService.Update(user);
        }

        [HttpPost("updateuser")]
        public async Task<IResult> UpdateUser(UserUpdateDto userUpdateDto)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Güncellendi",
                durum = true,
                islemtipi = "Kullanıcı Güncelleme İşlemi Spesifik",
                tarih = DateTime.Now,
                userid = id,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _userService.UpdateUser(userUpdateDto);
        }

        [HttpGet("getbyid")]
        public async Task<IDataResult<User>> GetById(int userId)
        {
            return await _userService.GetById(userId);
        }

        [HttpPost("add")]
        public async Task<IResult> Add(User user)
        {
            return await _userService.Add(user);
        }

        [HttpGet("getbyidlogin")]
        public async Task<IDataResult<User>> GetByIdLogin()
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            return await _userService.GetUserById(id);
        }
    }
}
