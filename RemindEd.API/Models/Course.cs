using System;
using System.Collections.Generic;

namespace RemindEd.API.Models
{
    public class Course
    {
        public int CourseID { get; set; }
        public int UserID { get; set; }
        public string CourseTitle { get; set; }
        public virtual ICollection<Lecture> Lectures { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int LastUpdatedByID { get; set; }

    }
}