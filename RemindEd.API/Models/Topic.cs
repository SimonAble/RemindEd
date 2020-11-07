using System.Collections.Generic;

namespace RemindEd.API.Models
{
    public class Topic
    {
        public int TopicID { get; set; }
        public int LectureID { get; set; }
        public string TopicTabName { get; set; }
        public TopicTypeCode TopicTypeCode { get; set; }
        public string TopicTitle { get; set; }
        public string TopicContents { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }

    public enum TopicTypeCode {
        Custom, 
        Article, 
        Resources, 
        Questions, 
        Concept, 
        Video, 
        Discussion, 
        Application, 
        Movie
    }
}