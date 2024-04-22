using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/iller")]
    [ApiController]
    public class IlController : ControllerBase
    {

        private IIlService _ilService;
        public IlController(IIlService ilService)
        {
            _ilService = ilService;
        }

        [HttpGet("getall")]
        public IActionResult Get()
        {

            var result = _ilService.GetAll();
            if (result.Success)
            {
              return Ok(result);
            }

            return BadRequest(result.Message);
        }


    }
}
