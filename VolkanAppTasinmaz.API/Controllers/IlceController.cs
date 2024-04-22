using Business.Abstract;
using DataAccess.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/ilceler")]
    [ApiController]
    public class IlceController : ControllerBase
    {


        private IIlceService _ilceService;
        private readonly IIlceDal _ilceDalReposity;
        public IlceController(IIlceService sehirService, IIlceDal ilceDalReposity)
        {
            _ilceService = sehirService;
            _ilceDalReposity = ilceDalReposity;
        }

        [HttpGet("getall")]
        public IActionResult Get()
        {

            var result = _ilceService.GetAll();
            if (result.Success)
            {
                return Ok(result);

            }
            return BadRequest(result);
        }


        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _ilceService.GetById(id);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("getlistbycategory")]
        public IActionResult GetListByCategory(int categoryId)
        {
            var result = _ilceService.GetListByCategory(categoryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
    }
}
