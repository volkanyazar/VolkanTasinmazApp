using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using Core.Utilities.Security.Hashing;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.DataAccess.Abstract;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;
     
        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
            
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userDal.GetClaims(user);
        }

        public void Add(User user)
        {
            _userDal.Add(user);
        }

        public IDataResult<List<User>> GetAll()
        {
            return new SuccessDataResult<List<User>>(_userDal.GetAll(), "Kullanıcılar Başarıyla Listelendi");
        }


        public IDataResult<User> GetById(int Id)
        {
            return new SuccessDataResult<User>(_userDal.Get(p => p.UserId == Id));
        }



        public User GetByMail(string email)
        {
            return _userDal.Get(u => u.Email == email);
        }

        public IResult Delete(User user)
        {
            _userDal.Delete(user);
            return new SuccessResult(user.FirstName+" kullanıcısı başarıyla silindi");
        }

      

        public IResult UpdateUser(UserUpdateDto userUpdateDto) 
        {

            var userResult = GetById(userUpdateDto.UserId);
            if (!userResult.Success)
                return new ErrorResult(userResult.Message);

            if (!HashingHelper.VerifyPasswordHash(userUpdateDto.ActivePassword, userResult.Data.PasswordHash, userResult.Data.PasswordSalt))
                return new ErrorResult("Şifre hatalı");

            // var customerResult = _userDal.Get(u => u.Email == userUpdateDto.Email);
            // if (customerResult != null)
            // return new ErrorResult("Bu Eposta Adresi kullanılıyor");


            if (userResult.Data.Email != userUpdateDto.Email)
            {
                if (GetByMail(userUpdateDto.Email) != null)
                {

                    return new ErrorResult("Kullanıcı zaten mevcut");
                }



            }


            userResult.Data.FirstName = userUpdateDto.FirstName;
            userResult.Data.LastName = userUpdateDto.LastName;
            userResult.Data.Email = userUpdateDto.Email;

         
            if (userUpdateDto.NewPassword.Length > 5)
            {
                HashingHelper.CreatePasswordHash(userUpdateDto.NewPassword, out byte[] passwordHash, out byte[] passwordSalt);
                userResult.Data.PasswordHash = passwordHash;
                userResult.Data.PasswordSalt = passwordSalt;
            }


            try
            {
                Update(userResult.Data);
            }
            catch (Exception)
            {
                return new ErrorResult("Kullanıcı Güncelleme Başarısız");
            }

            return new SuccessResult("Kullanıcı Güncelleme Başarılı");


            
        }

        public IDataResult<User> GetByIdLogin(int Id)
        {
            return new SuccessDataResult<User>(_userDal.Get(p => p.UserId == Id));
        }

        public User GetUserById(int id)
        {
            return _userDal.GetUserById(id);
        }

        public IResult Update(User user)
        {
            var userResult = GetById(user.UserId);
            if (!userResult.Success)
                return new ErrorResult(userResult.Message);

            if (userResult.Data.Email != user.Email)
            {
                if (GetByMail(user.Email) != null)
                {
                    return new ErrorResult("Kullanıcı zaten mevcut");
                }
            }

            userResult.Data.FirstName = user.FirstName;
            userResult.Data.LastName = user.LastName;
            userResult.Data.Email = user.Email;
            userResult.Data.Role = user.Role;
            userResult.Data.Adres = user.Adres;

            if (!string.IsNullOrEmpty(user.NewPassword))
            {
                // Yeni parolayı hash'le ve güncelle
                HashingHelper.CreatePasswordHash(user.NewPassword, out byte[] passwordHash, out byte[] passwordSalt);
                userResult.Data.PasswordHash = passwordHash;
                userResult.Data.PasswordSalt = passwordSalt;
            }

            try
            {
                _userDal.Update(userResult.Data);
            }
            catch (Exception)
            {
                return new ErrorResult("Kullanıcı Güncelleme Başarısız");
            }

            return new SuccessResult("Kullanıcı Güncelleme Başarılı");
        }

        public IResult Delete(int id)
        {
            var userToDelete = _userDal.Get(p => p.UserId == id);

            if (userToDelete == null)
            {
                return new ErrorResult("Kullanıcı Bulunamadı");
            }

            _userDal.Delete(userToDelete);
            return new SuccessResult("Taşınmaz Başarıyla Silindi...");
        }
    }
}
