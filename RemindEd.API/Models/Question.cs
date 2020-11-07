using System.Collections.Generic;

namespace RemindEd.API.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public int TopicId { get; set; }
        public Photo Picture { get; set; }
        public string Title { get; set; }
        public string QuestionText { get; set; }
        public int QuestionType { get; set; }   
        public bool Autograde { get; set; }
        public virtual ICollection<QuestionOptions> QuestionOptions { get; set; }
        public int QuestionAnswer { get; set; }
    }

    public class QuestionOptions {
        public int QuestionOptionsId { get; set; }
        public int QuestionId { get; set; }
        public string OptionText { get; set; }
        public bool IsCorrectAnswer { get; set; }
    }

    public enum QuestionTypeCode {
        MultipleChoice,
        TrueFalse,
        FillInBlanks,
        MultipleAnswers,
        Essay,
        SingleInput
    }
}