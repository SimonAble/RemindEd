using System;
using System.Collections.Generic;
using RemindEd.API.Models.Constants;

namespace RemindEd.API.Models
{
    public class User
    {
        //General user info
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string ProfessionalTitle { get; set; }
        public string ProfessionalDescription { get; set; }
        public string Language { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public IList<CourseFollower> CourseFollowers { get; set; }
        public IList<ArticleFollower> ArticleFollowers { get; set; }

        // public int? UserTypeId { get; set; }
        // public UserType UserType { get; set; }

        //Affiliated Links
        public string TwitterLink { get; set; }
        public string FacebookLink { get; set; }
        public string LinkedinLink { get; set; }
        public string YoutubeLink { get; set; }
        public string UdemyLink { get; set; }
        public string CourseraLink { get; set; }

        //Table Utility
        public DateTime? LastActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }

    }
}