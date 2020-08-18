using System;
using System.Linq;
using AutoMapper;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDTO>()
                .ForMember(dest => dest.BackgroundPhotoUrl,
                    opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(p => p.IsProfileBackground).Url))
                .ForMember(dest => dest.ProfilePhotoUrl,
                    opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(p => p.IsProfilePicture).Url))
                .ForMember(dest => dest.Age,
                    opt => opt.MapFrom(src =>
                    src.DateOfBirth.GetAgeFromDOB()));
            CreateMap<User, UserDetailsDTO>()
                .ForMember(dest => dest.BackgroundPhotoUrl,
                    opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(p => p.IsProfileBackground).Url))
                .ForMember(dest => dest.ProfilePhotoUrl,
                    opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(p => p.IsProfilePicture).Url))
                .ForMember(dest => dest.Age,
                    opt => opt.MapFrom(src =>
                    src.DateOfBirth.GetAgeFromDOB()));
            CreateMap<User, UserContextDTO>()
                .ForMember(dest => dest.FullName,
                    opt => opt.MapFrom(src => (src.FirstName != null && src.LastName != null) ? src.FirstName + " " + src.LastName : null));
            CreateMap<Photo, PhotosForUserDTO>();
            CreateMap<UserDetailsDTO, User>();
        }
        
    }
}
