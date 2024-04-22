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
        ITasinmazService _tasinmazService;
        IUserService _userService;
        IUserOperationClaimService _userOperationClaimService;
        public UserController(IUserService userService, ITasinmazService productService, IUserOperationClaimService userOperationClaimService)
        {
            _userService = userService;
            _tasinmazService = productService;
            _userOperationClaimService = userOperationClaimService; 

        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {

            var result = _userService.GetAll().Data.OrderByDescending(u=>u.UserId);
            //if (result.Success)
            // {
            return Ok(result);
            //}
           // return BadRequest(result);
        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                var userId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
                var userX = _userService.GetUserById(id);
                var userToDelete = _userService.GetById(id);
                if (userToDelete == null)
                {
                    return NotFound(); // Taşınmaz bulunamazsa 404 hatası döndürün.
                }

                _userService.Delete(id);
                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Silindi",
                    durum = true,
                    islemtipi = "Kullanıcı Silme İşlemi",
                    tarih = DateTime.Now,
                    userid = userId,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                _userOperationClaimService.DeleteUserClaim(userToDelete.Data.UserId);
                return NoContent(); // Başarılı silme durumunda 204 No Content yanıtı döndürün.
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        [HttpPost("delete")]
        public IActionResult Delete(User tasinmaz)
        {

            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);

            var result = _userService.Delete(tasinmaz);
            if (result.Success)
            {
                _userOperationClaimService.DeleteUserClaim(tasinmaz.UserId);

                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Silindi",
                    durum = true,
                    islemtipi = "Kullanıcı Silme İşlemi Spesifik",
                    tarih = DateTime.Now,
                    userid = id,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }

        [HttpPut("update")]
        public IActionResult Update(User user)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var userDatas = _userService.GetUserById(id);
            var result = _userService.Update(user);
            if (result.Success)
            {
                var updatedUserData = _userOperationClaimService.GetOperationClaimByUserId(user.UserId).Data;

                updatedUserData.UserId = user.UserId;
                updatedUserData.OperationClaimId = user.Role == "Admin" ? 1 : 2;
                _userOperationClaimService.UpdateUserClaim(updatedUserData);
               

                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Güncellendi",
                    durum = true,
                    islemtipi = "Kullanıcı Güncelleme İşlemi",
                    tarih = DateTime.Now,
                    userid = id,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("updateuser")]
        public IActionResult UpdateUser(UserUpdateDto userUpdateDto)
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(userUpdateDto.UserId);
            var result = _userService.UpdateUser(userUpdateDto);

         
            if (result.Success)
            {
                var updatedUserData = _userOperationClaimService.GetOperationClaimByUserId(user.UserId).Data;
                updatedUserData.UserId = user.UserId;
                updatedUserData.OperationClaimId = user.Role == "Admin" ? 1 : 2;
                _userOperationClaimService.UpdateUserClaim(updatedUserData);

                _tasinmazService.AddLog(new Log
                {
                    aciklama = "Kayıt Güncellendi",
                    durum = true,
                    islemtipi = "Kullanıcı Güncelleme İşlemi Spesifik",
                    tarih = DateTime.Now,
                    userid = id,
                    logip = HttpContext.Connection.RemoteIpAddress?.ToString()
                });
                return Ok(result);
            }
            return BadRequest(result);
        }



        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _userService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
        [HttpPost("add")]
        public IActionResult Post(User user)
        {
            _userService.Add(user);
                return Ok(user);
        }

        [HttpGet("getbyidlogin")]
        public IActionResult GetByIdLogin()
        {
            var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = _userService.GetUserById(id);
            return Ok(user);
        }


    }
}
