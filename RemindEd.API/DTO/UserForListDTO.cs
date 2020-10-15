using System;
using System.Collections.Generic;

namespace RemindEd.API.DTO
{
    public class UserForListDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string ProfessionalTitle { get; set; }
        public string ProfessionalDescription { get; set; }
        public string Language { get; set; }
        public string ProfilePhotoUrl { get; set; }
        public string BackgroundPhotoUrl { get; set; }
        public ICollection<PhotosForUserDTO> Photos { get; set; }

        //Table Utility
        public DateTime LastActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
    }
}
