using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOperationClaimController : ControllerBase
    {
        private readonly IUserOperationClaimService _userOperationClaimService;
        public UserOperationClaimController(IUserOperationClaimService userOperationClaimService)
        {
            _userOperationClaimService = userOperationClaimService;
        }

        [HttpGet("getall")]
        public async Task<IDataResult<List<UserOperationClaim>>> GetAll()
        {
            return await _userOperationClaimService.GetAll();
        }

        [HttpGet("getoperationbyuserid")]
        public async Task<IDataResult<UserOperationClaim>> GetOperationClaimByUserId(int userId)
        {
            return await _userOperationClaimService.GetOperationClaimByUserId(userId);
        }

        [HttpPost("add")]
        public async Task<IResult> AddUserClaim(UserOperationClaim userOperationClaim)
        {
            return await _userOperationClaimService.AddUserClaim(userOperationClaim);
        }

        [HttpDelete("delete/{userOperationClaimUserId}")]
        public async Task<IResult> DeleteUserClaim(int userOperationClaimUserId)
        {
            return await _userOperationClaimService.DeleteUserClaim(userOperationClaimUserId);
        }

        [HttpPut("update")]
        public async Task<IResult> UpdateUserClaim(UserOperationClaim userOperationClaim)
        {
            return await _userOperationClaimService.UpdateUserClaim(userOperationClaim);
        }
    }
}
