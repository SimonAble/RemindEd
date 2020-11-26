using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RemindEd.API.Data;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await userRepository.GetUsers();

            var usersInfo = mapper.Map<IEnumerable<UserForListDTO>>(users);

            return Ok(usersInfo);
        }

        [HttpGet("GetUserById/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await userRepository.GetUser(id);

            var userInfo = mapper.Map<UserDetailsDTO>(user);

            return Ok(userInfo);
        }

        [HttpGet("GetUserContext/{username}")]
        public async Task<IActionResult> GetUserContext(string username)
        {
            var user = await userRepository.GetUserContext(username);

            var userInfo = mapper.Map<UserContextDTO>(user);

            return Ok(userInfo);
        }

        [HttpPut("SaveUser/{id}")]
        public async Task<IActionResult> SaveUser(int id, UserDetailsDTO user) {

            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            var userToSave = mapper.Map<User>(user);
            var userFromRepo = await userRepository.SaveUser(id, userToSave);

            if(userFromRepo != null)
                return NoContent();

            throw new Exception($"Updating user with id: {id} failed...");
        }
    }
}
