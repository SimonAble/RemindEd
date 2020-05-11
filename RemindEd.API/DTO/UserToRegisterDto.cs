using System.ComponentModel.DataAnnotations;

namespace RemindEd.API.DTO
{
    public class UserToRegisterDto
    {
        [Required]
        [EmailAddress(ErrorMessage = "Username must be a valid email address")]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 20 characters")]
        public string Password { get; set; }
    }
}