using System;
using System.Collections.Generic;

namespace RemindEd.API.Models
{
    public class Article
    {
        public int ArticleID { get; set; }
        public int UserID { get; set; }
        public string ArticleTitle { get; set; }
        public string ArticleContents { get; set; }
        public string ArticleDescription { get; set; }
        public IList<ArticleFollower> ArticleFollowers { get; set; }
        public DateTime CreatedDate { get; set; }
        public int CreatedByID { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int LastUpdatedByID { get; set; }
    }
}