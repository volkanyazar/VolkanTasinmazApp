using Business.Abstract;
using Core.Utilities;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace WebAPI.Controllers
{
    [Route("api/ilceler")]
    [ApiController]
    public class IlceController : ControllerBase
    {
        private readonly IIlceService _ilceService;
        public IlceController(IIlceService ilceService)
        {
            _ilceService = ilceService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<Ilce>>> GetAll()
        {

            return await _ilceService.GetAll();
        }

        [HttpGet("getbyid")]
        public async Task<IDataResult<Ilce>> GetById(int ilceId)
        {
            return await _ilceService.GetById(ilceId);
        }

        [HttpGet("getlistbycategory")]
        public async Task<IDataResult<List<Ilce>>> GetListByCategory(int categoryId)
        {
            return await _ilceService.GetListByCategory(categoryId);
        }

        [HttpGet("getIlceDetails")]
        public async Task<IDataResult<List<IlceDetailDto>>> GetIlceDetails()
        {
            return await _ilceService.GetIlceDetails();
        }
    }
}
