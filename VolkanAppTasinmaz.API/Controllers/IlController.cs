using Business.Abstract;
using Core.Utilities;
using Entities.Concrete;
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
        private readonly IIlService _ilService;
        public IlController(IIlService ilService)
        {
            _ilService = ilService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<Il>>> GetAll()
        {
            return await _ilService.GetAll();
        }


    }
}
