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
    [Route("api/logs")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly ILogService _logService;

        public LogController(ILogService logService)
        {
            _logService = logService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<Log>>> GetAll()
        {
            return await _logService.GetAll();
        }

        [HttpPost("add")]
        public async Task<IResult> Add(Log log)
        {
            return await _logService.Add(log);
        }
    }
}
