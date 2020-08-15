using System;
namespace RemindEd.API.DTO
{
    public class UserContextDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public string Token { get; set; }
        public DateTime LastActive { get; set; }
    }
}
