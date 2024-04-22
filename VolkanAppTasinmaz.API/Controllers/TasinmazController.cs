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
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using VolkanAppTasinmaz.API.Entities.Concrete;

namespace VolkanAppTasinmaz.API.Controllers
{
    [Route("api/tasinmazlar")]
    [ApiController]
    public class TasinmazController : ControllerBase
    {
        //private Context _context;
        private readonly ITasinmazService _tasinmazService;
        private readonly ITasinmazDal _tasinmazDal;
        IUserService _userService;

        public TasinmazController(ITasinmazService productService, ITasinmazDal tasinmazDal, IUserService userService)
        {
            _tasinmazService = productService;
            _tasinmazDal = tasinmazDal;
            _userService = userService;
        }

        //[HttpGet("getall")]
        //public async Task<ActionResult> GetAllTasinmaz()
        //{
        //    var result = _tasinmazService.GetAll();
        //    return Ok(result);
        //}
        [HttpGet("getall")]
        public IActionResult Get()
        {
            var values = _tasinmazService.GetAll();
         
            if(values.Success)
                return Ok(values);
            else
                return BadRequest(values);  

        }
        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _tasinmazService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getallasc")]
        public IActionResult GetAllTasinmaz()
        {
            var result = _tasinmazDal.GetAllTasinmaz().OrderBy(t => t.TasinmazId);  
            return Ok(result);
        }
        [HttpPost("add")]
        public IActionResult Post(Tasinmaz tasinmaz)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);
            var result = _tasinmazService.Add(tasinmaz);
            if (result.Success)
            {
                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Eklendi",
                    durum = true,
                    islemtipi = "Tasınmaz Ekleme İşlemi",
                    tarih = DateTime.Now,
                    userid = id,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                return Ok(result);
            }
            else
                return BadRequest(result);
        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteTasinmaz(int id)
        {
            try
            {
                var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
                var user = _userService.GetUserById(id);
                var tasinmaz = _tasinmazService.GetById(id);
                if (tasinmaz == null)
                {
                    return NotFound(); // Taşınmaz bulunamazsa 404 hatası döndürün.
                }

                _tasinmazService.Delete(id);
                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Silindi ",
                    durum = true,
                    islemtipi = "Tasınmaz Silme İşlemi",
                    tarih = DateTime.Now,
                    userid = userId,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()

                });
                return NoContent(); // Başarılı silme durumunda 204 No Content yanıtı döndürün.
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPut("update")]
        public IActionResult Update(Tasinmaz tasinmaz)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);
            var result = _tasinmazService.Update(tasinmaz);
            if (result.Success)
            {
                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Güncellendi",
                    durum = true,
                    islemtipi = "Tasınmaz Güncelleme İşlemi",
                    tarih = DateTime.Now,
                    userid = id,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                return Ok(result);

            }
            else
                return BadRequest(result);
        }

        [HttpGet("getlistbyil")]
        public IActionResult GetListByIl(int Sid)
        {

            var result = _tasinmazService.GetListByIl(Sid);
            if (result.Success)
            {
                return Ok(result);

            }
            return BadRequest(result);
        }

        [HttpGet("getalllog")]
        public IActionResult GetAllLog()
        {

            var result = _tasinmazService.GetAllLog().Data.OrderByDescending(u => u.logid);
            // if (result.Success)
            // {
            return Ok(result);

            // }
            //  return BadRequest(result);
        }

        [HttpGet("getbyuserid")]
        public IActionResult GetByUserId(int userId)
        {
            var result = _tasinmazService.GetByUserId(userId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
