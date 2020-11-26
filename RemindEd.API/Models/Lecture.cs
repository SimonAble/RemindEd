using System;
using System.Collections.Generic;

namespace RemindEd.API.Models
{
    public class Lecture
    {
        public int LectureID { get; set; }
        public int CourseID { get; set; }
        public string LectureName { get; set; }
        public bool? LectureViewed { get; set; }
        public bool? LectureCompleted { get; set; }
        public bool? LectureLocked { get; set; }
        public virtual ICollection<Topic> Topics { get; set; }
        public CourseLectureDetails CourseLectureDetails { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate{ get; set; }
        public int LastUpdatedByID { get; set; }
    }
}