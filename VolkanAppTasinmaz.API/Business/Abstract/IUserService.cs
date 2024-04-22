using Core.Entities.Concrete;
using Core.Utilities;
using System.Collections.Generic;
using Entities.Concrete;
using System;
using System.Text;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Abstract
{
    public interface IUserService
    {
        List<OperationClaim> GetClaims(User user);
        void Add(User user);
        User GetByMail(string email);
        IDataResult<List<User>> GetAll();
        IResult Delete(User user);

        IResult Delete(int id);
        IResult Update(User user);
        IDataResult<User> GetById(int userId);
        User GetUserById(int id);
        IDataResult<User> GetByIdLogin(int userId);

        IResult UpdateUser(UserUpdateDto userUpdateDto);

    }
}
