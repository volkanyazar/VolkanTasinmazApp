using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/mahalleler")]
    [ApiController]
    public class MahalleController : ControllerBase
    {


        private IMahalleService _mahalleService;
        public MahalleController(IMahalleService sehirService)
        {
            _mahalleService = sehirService;
        }

        [HttpGet("getlistbycategory")]
        public IActionResult GetListByCategory(int categoryId)
        {
            var result = _mahalleService.GetListByCategory(categoryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }



        [HttpGet("getall")]
        public IActionResult Get()
        {

            var result = _mahalleService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result.Message);
        }







    }
}
