using Core.Entities.Concrete;
using Core.Utilities;
using System.Collections.Generic;
using Entities.Concrete;
using System;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserOperationClaimService
    {
        Task<IDataResult<List<UserOperationClaim>>> GetAll();
        Task<IDataResult<UserOperationClaim>> GetOperationClaimByUserId(int userId);
        Task<IResult> AddUserClaim(UserOperationClaim userOperationClaim);
        Task<IResult> UpdateUserClaim(UserOperationClaim userOperationClaim);
        Task<IResult> DeleteUserClaim(int userOperationClaimUserId);
    }
}
