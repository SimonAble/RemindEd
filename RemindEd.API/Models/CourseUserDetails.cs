using System;

namespace RemindEd.API.Models
{
    public class CourseUserDetails
    {
        public int CourseUserDetailsId { get; set; }
        public int Progress { get; set; }
        public int OverallGrade { get; set; } 

        public int CourseId { get; set; }
        public Course Course { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime LastViewedDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int LastUpdatedByID { get; set; }

    }
}