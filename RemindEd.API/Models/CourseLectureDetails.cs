using System;

namespace RemindEd.API.Models
{
    public class CourseLectureDetails
    {
        public int CourseLectureDetailsId { get; set; }
        public bool IsGraded { get; set; }
        public double LectureGrade { get; set; }

        public int LectureID { get; set; }
        public virtual Lecture Lecture { get; set; }

        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int LastUpdatedByID { get; set; }

    }
}