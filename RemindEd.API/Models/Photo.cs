using System;

namespace RemindEd.API.Models
{
    public class Photo
    {
        public int ID { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public bool IsProfilePicture { get; set; }
        public bool IsProfileBackground { get; set; }
        public DateTime DateAdded { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}