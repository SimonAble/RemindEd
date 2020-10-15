using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using RemindEd.API.Data;
using RemindEd.API.DTO;
using RemindEd.API.Helpers;
using RemindEd.API.Models;

namespace RemindEd.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinaryConfig> _cloudinaryConfig;
        private readonly IUserRepository _userRepository;
        private Cloudinary _cloudinary;
        public PhotosController(
            IMapper mapper, 
            IOptions<CloudinaryConfig> cloudinaryConfig,
            IUserRepository userRepository) {
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;
            _userRepository = userRepository;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id) {
            var photoFromRepo = await _userRepository.GetPhoto(id);

            var photo = _mapper.Map<PhotoToReturnDTO>(photoFromRepo);

            return Ok(photo);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, [FromForm] PhotoForCreationDTO photoForCreationDTO) 
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            var userFromRepo = await _userRepository.GetUser(userId);
            var file = photoForCreationDTO.File;
            var uploadResult = new ImageUploadResult();

            if (file.Length > 0) {
                using (var stream = file.OpenReadStream()) {
                    var uploadParams = new ImageUploadParams() {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDTO.Url = uploadResult.Url.ToString();
            photoForCreationDTO.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDTO);

            userFromRepo.Photos.Add(photo);

            if(await _userRepository.SaveAll()) {
                var photoToReturn = _mapper.Map<PhotoToReturnDTO>(photo);
                return CreatedAtRoute("GetPhoto", new { userId, id = photo.ID }, photoToReturn);
            }

            return BadRequest("Could not add the photo");
            
        }
        
    }
}