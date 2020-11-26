using System;
using System.Collections.Generic;
using RemindEd.API.Models;

namespace RemindEd.API.DTO
{
    public class CourseInfoDTO
    {
        public int CourseID { get; set; }
        public int UserID { get; set; }
        public string CourseTitle { get; set; }
        public string CreatorName { get; set; }
        public string CourseDescription { get; set; }
        public IList<CourseFollower> CourseFollowers { get; set; }
        public int Progress { get; set; }
        public int OverallGrade { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int LastUpdatedByID { get; set; }
    }
}