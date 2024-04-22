using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    class UserOperationClaimManager :IUserOperationClaimService
    {
        IUserOperationClaimDal _useroperationclaimDal;

        public UserOperationClaimManager(IUserOperationClaimDal useroperationclaimDal)
        {
            _useroperationclaimDal = useroperationclaimDal;
        }

        public IResult AddUserClaim(UserOperationClaim userOperationClaim)
        {
            _useroperationclaimDal.Add(userOperationClaim);
            return new SuccessResult("Kullanıcı için Yetki Eklendi");
        }

        public IResult UpdateUserClaim(UserOperationClaim userOperationClaim)
        {
            _useroperationclaimDal.Update(userOperationClaim);
            return new SuccessResult("Kullanıcı için Yetki Güncellendi");
        }

        public IDataResult<List<UserOperationClaim>> GetAll()
        {
            return new SuccessDataResult<List<UserOperationClaim>>(_useroperationclaimDal.GetAll(), "Listelendi");
        }

        public IResult DeleteUserClaim(int userOperationClaimUserId)
        {
            var userOperationToDelete = _useroperationclaimDal.Get(p => p.UserId == userOperationClaimUserId);

            if (userOperationToDelete == null)
            {
                return new ErrorResult("Operasyon Bulunamadı");
            }

            _useroperationclaimDal.Delete(userOperationToDelete);
            return new SuccessResult("Kullanıcı Yetki Bilgileri Silindi.");
        }

        public IDataResult<UserOperationClaim> GetOperationClaimByUserId(int userId)
        {
            return new SuccessDataResult<UserOperationClaim>(_useroperationclaimDal.Get(p => p.UserId == userId));
        }
    }
}
