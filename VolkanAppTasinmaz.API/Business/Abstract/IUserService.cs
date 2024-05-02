using Core.Entities.Concrete;
using Core.Utilities;
using System.Collections.Generic;
using Entities.Concrete;
using System;
using System.Text;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserService
    {
        Task<IDataResult<List<OperationClaim>>> GetClaims(User user);
        Task<IResult> Add(User user);
        Task<IDataResult<User>> GetByMail(string email);
        Task<IDataResult<List<User>>> GetAll();
        Task<IResult> Delete(User user);
        Task<IResult> Delete(int userId);
        Task<IResult> Update(User user);
        Task<IDataResult<User>> GetById(int userId);
        Task<IDataResult<User>> GetUserById(int userId);
        Task<IDataResult<User>> GetByIdLogin(int userId);
        Task<IResult> UpdateUser(UserUpdateDto userUpdateDto);
    }
}
