using Core.Entities.Concrete;
using Core.Utilities;
using System.Collections.Generic;
using Entities.Concrete;
using System;
using System.Text;

namespace Business.Abstract
{
    public interface IUserOperationClaimService
    {
        IDataResult<List<UserOperationClaim>> GetAll();

        IDataResult<UserOperationClaim> GetOperationClaimByUserId(int userId);
        IResult AddUserClaim(UserOperationClaim userOperationClaim);

        IResult UpdateUserClaim(UserOperationClaim userOperationClaim);

        IResult DeleteUserClaim(int userOperationClaimUserId);


    }
}
