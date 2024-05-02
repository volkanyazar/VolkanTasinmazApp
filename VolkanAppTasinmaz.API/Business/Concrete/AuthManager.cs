using System.Threading.Tasks;
using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities;
using Core.Utilities.Security.Hashing;
using Core.Utilities.Security.JWT;
using VolkanAppTasinmaz.API.Core.Entities.Concrete;
using VolkanAppTasinmaz.API.Entities.DTOs;

namespace Business.Concrete
{
    public class AuthManager : IAuthService
    {
        private readonly IUserService _userService;
        private readonly ITokenHelper _tokenHelper;
        private readonly IUserOperationClaimService _userOperationClaimService;

        public AuthManager(IUserService userService, ITokenHelper tokenHelper, IUserOperationClaimService userOperationClaimService)
        {
            _userService = userService;
            _tokenHelper = tokenHelper;
            _userOperationClaimService = userOperationClaimService;
        }
        public async Task<IDataResult<AccessToken>> Register(UserForRegisterDto userForRegisterDto, string password)
        {
            var userExists = await UserExists(userForRegisterDto.Email);
            if (!userExists.Success)
            {
                return new ErrorDataResult<AccessToken>(userExists.Message); ;
            }

            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
            var user = new User
            {
                Email = userForRegisterDto.Email,
                FirstName = userForRegisterDto.FirstName,
                LastName = userForRegisterDto.LastName,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Role = userForRegisterDto.Role,
                Adres = userForRegisterDto.Adres,
                Status = true
            };

            await _userService.Add(user);
            await _userOperationClaimService.AddUserClaim(new UserOperationClaim
            {
                UserId = user.UserId,
                OperationClaimId = userForRegisterDto.Role == "Admin" ? 1 : 2
            });
            var userToRegister = await CreateAccessToken(user);
            return new SuccessDataResult<AccessToken>(userToRegister?.Data, "Kullanıcı Başarıyla Kayıt Oldu...");
        }

        public async Task<IDataResult<AccessToken>> Login(UserForLoginDto userForLoginDto)
        {
            var userData = await _userService.GetByMail(userForLoginDto.Email);
            var userToCheck = userData.Data;
            if (userToCheck == null)
            {
                return new ErrorDataResult<AccessToken>("Kullanıcı bulunamadı...");
            }

            if (!HashingHelper.VerifyPasswordHash(userForLoginDto.Password, userToCheck.PasswordHash, userToCheck.PasswordSalt))
            {
                return new ErrorDataResult<AccessToken>("Parola hatalı...");
            }
            
            var userToLogin = await CreateAccessToken(userToCheck);

            return new SuccessDataResult<AccessToken>(userToLogin?.Data, "Kullanıcı Girişi Başarılı...");
        }

        public async Task<IResult> UserExists(string email)
        {
            var user = await _userService.GetByMail(email);
            if (user?.Data != null)
            {
                return new ErrorResult("Kullanıcı mevcut...");
            }
            return new SuccessResult();
        }

        public async Task<IDataResult<AccessToken>> CreateAccessToken(User user)
        {
            var claims = await _userService.GetClaims(user);
            var claimsData = claims.Data;
            var accessToken = _tokenHelper.CreateToken(user, claimsData);
            return new SuccessDataResult<AccessToken>(accessToken, "Token Başarıyla oluştu");
        }
    }
}
