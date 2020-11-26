using System;
using System.Collections.Generic;

namespace RemindEd.API.DTO
{
    public class UserDetailsDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string ProfessionalTitle { get; set; }
        public string ProfessionalDescription { get; set; }
        public string Language { get; set; }
        public ICollection<PhotosForUserDTO> Photos { get; set; }

        //Affiliated Links
        public string TwitterLink { get; set; }
        public string FacebookLink { get; set; }
        public string LinkedinLink { get; set; }
        public string YoutubeLink { get; set; }
        public string UdemyLink { get; set; }
        public string CourseraLink { get; set; }

        //Table Utility
        public DateTime LastActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
    }
}
