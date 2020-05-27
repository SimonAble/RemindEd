using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RemindEd.API.Data;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository authRepository;
        private readonly IConfiguration config;

        public AuthController(IAuthRepository authRepository, IConfiguration config)
        {
            this.authRepository = authRepository;
            this.config = config;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserToRegisterDto userForRegister) 
        {
            //validate request
            string usernameFormatted = userForRegister.Username.ToLower();
            bool userExists = await this.authRepository.UserExists(userForRegister.Username);

            //Check if user exists
            if(userExists) {
                return BadRequest("Username Already Exists");
            }

            //Create new User Instance
            var userToCreate = new User {
                Username = userForRegister.Username
            };

            //Create User
            var createdUser = await this.authRepository.Register(userToCreate, userForRegister.Password);

            //Return Created at Route
            return StatusCode(201);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserToLoginDto userToLogin) 
        {
            //Pull user from db
            var dbUser = await this.authRepository.Login(userToLogin.Username.ToLower(), userToLogin.Password);

            //Check if user exists
            if(dbUser == null) 
            {
                return Unauthorized();
            }

            //Providing claims for Id and Username
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, dbUser.Id.ToString()),
                new Claim(ClaimTypes.Name, dbUser.Username)
            };

            //Creating a key from Appsettings Token Value
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config.GetSection("AppSettings:Token").Value));

            //Hashing key for signing credentials
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            //Create the token
            var tokenDescriptor = new SecurityTokenDescriptor() 
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            //Create a new JWT security token handler
            var tokenHandler = new JwtSecurityTokenHandler();

            //Create a token based on descriptor
            var token = tokenHandler.CreateToken(tokenDescriptor);

            //Write token into response sent to client
            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}