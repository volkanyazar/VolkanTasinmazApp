using Business.Abstract;
using Core.Utilities;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Business.Abstract;
using VolkanAppTasinmaz.API.Business.Concrete;
using VolkanAppTasinmaz.API.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace VolkanAppTasinmaz.API.Controllers
{
    [Route("api/tasinmazlar")]
    [ApiController]
    public class TasinmazController : ControllerBase
    {
        private readonly ITasinmazService _tasinmazService;
        private readonly IUserService _userService;

        public TasinmazController(ITasinmazService productService, IUserService userService)
        {
            _tasinmazService = productService;
            _userService = userService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<Tasinmaz>>> GetAll()
        {
            return await _tasinmazService.GetAll();
        }
        
        [HttpGet("getbyid")]
        public async Task<IDataResult<Tasinmaz>> GetById(int tasinmazId)
        {
            return await _tasinmazService.GetById(tasinmazId);
        }

        [HttpGet("getallasc")]
        public async Task<IDataResult<List<Tasinmaz>>> GetAllTasinmaz()
        {
            return await _tasinmazService.GetAll();
        }
        [HttpPost("add")]
        public async Task<IResult> Add(Tasinmaz tasinmaz)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = await _userService.GetUserById(id);
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Eklendi",
                durum = true,
                islemtipi = "Tasınmaz Ekleme İşlemi",
                tarih = DateTime.Now,
                userid = id,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _tasinmazService.Add(tasinmaz);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IResult> DeleteTasinmaz(int id)
        {
            var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = await _userService.GetUserById(id);
            var tasinmaz = _tasinmazService.GetById(id);

            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Silindi ",
                durum = true,
                islemtipi = "Tasınmaz Silme İşlemi",
                tarih = DateTime.Now,
                userid = userId,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _tasinmazService.Delete(id);
        }

        [HttpPut("update")]
        public async Task<IResult> Update(Tasinmaz tasinmaz)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = await _userService.GetUserById(id);
            await _tasinmazService.AddLog(new Log
            {
                aciklama = "Kayıt Güncellendi",
                durum = true,
                islemtipi = "Tasınmaz Güncelleme İşlemi",
                tarih = DateTime.Now,
                userid = id,
                logip = HttpContext.Connection.RemoteIpAddress?.ToString()
            });
            return await _tasinmazService.Update(tasinmaz);
        }


        [HttpGet("getalllog")]
        public async Task<IDataResult<List<Log>>> GetAllLog()
        {
            return await _tasinmazService.GetAllLog();
        }

        [HttpGet("getbyuserid")]
        public async Task<IDataResult<List<Tasinmaz>>> GetByUserId(int userId)
        {
            return await _tasinmazService.GetByUserId(userId);
        }
    }
}
