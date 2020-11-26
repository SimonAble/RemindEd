using Microsoft.EntityFrameworkCore;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class DataContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CourseFollower>().HasKey(cf => new { cf.UserId, cf.CourseId });
            modelBuilder.Entity<ArticleFollower>().HasKey(af => new { af.UserId, af.ArticleId });
        }
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Article> Article { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Lecture> Lectures { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionOptions> QuestionsOptions { get; set; }
        public DbSet<CourseLectureDetails> CourseLectureDetails { get; set; }
        public DbSet<CourseUserDetails> CourseUserDetails { get; set; }
        public DbSet<CourseFollower> CourseFollower { get; set; }
        public DbSet<ArticleFollower> ArticleFollower { get; set; }
    }
}