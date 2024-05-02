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
    [Route("api/mahalleler")]
    [ApiController]
    public class MahalleController : ControllerBase
    {
        private IMahalleService _mahalleService;
        public MahalleController(IMahalleService sehirService)
        {
            _mahalleService = sehirService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<Mahalle>>> GetAll()
        {
            return await _mahalleService.GetAll();
        }

        [HttpGet("getlistbycategory")]
        public async Task<IDataResult<List<Mahalle>>> GetListByCategory(int categoryId)
        {
            return await _mahalleService.GetListByCategory(categoryId);
        }

    }
}
