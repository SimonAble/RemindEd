using System;
namespace RemindEd.API.DTO
{
    public class PhotosForUserDTO
    {
        public int ID { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public bool IsProfilePicture { get; set; }
        public bool IsProfileBackground { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
