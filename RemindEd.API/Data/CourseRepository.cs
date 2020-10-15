using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class CourseRepository: ICourseRepository
    {
        private readonly DataContext context;

        public CourseRepository(DataContext context)
        {
            this.context = context;
        }


        public void Add<T>(T entity) where T : class
        {
            context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            context.Remove(entity);
        }

        public async Task<Course> GetCourseByCourseId(int id)
        {
            var course = await context.Courses
                .Include(l => l.Lectures)
                    .ThenInclude(l => l.Topics)
                .FirstOrDefaultAsync(u => u.CourseID == id);

            if(course == null)
            {
                throw new Exception("Course not found");
            }

            return course;
        }

        public async Task<IEnumerable<Course>> GetCourses()
        {
            var course = await context.Courses.ToListAsync();

            if (course == null)
            {
                throw new Exception("Courses not found");
            }

            return course;
        }

        public async Task<IEnumerable<Course>> GetCoursesByUserId(int userId)
        {
            var courses = await context.Courses.Where(c => c.CreatedByID == userId).ToListAsync();

            if(courses == null) {
                throw new Exception("Courses not found");
            }

            return courses;
        }

        // public async Task<IEnumerable<Course>> GetCoursesByUserId(int id)
        // {
        //     var course = await context.Courses.ToListAsync().Where(char => );

        //     if (course == null)
        //     {
        //         throw new Exception("User not found");
        //     }

        //     return course;
        // }

        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public async Task<Course> SaveCourse(Course course) {
            
            course.CreatedByID = course.UserID;
            course.LastUpdatedByID = course.UserID;
            course.CreatedDate = DateTime.Now;
            course.LastUpdatedDate = DateTime.Now;

            this.context.Courses.Add(course);
            await this.context.SaveChangesAsync();

            return course;
        }

        public async Task<Course> UpdateCourse(Course course) {
            var courseEntity = this.context.Courses.FirstOrDefault(c => c.CourseID == course.CourseID);

            var lectures = this.context.Lectures.Where(lec => lec.CourseID == course.CourseID).ToList();

            if(courseEntity != null) {
                courseEntity.CourseTitle = course.CourseTitle;

                foreach (var lecture in lectures.ToList())
                {
                    var topics = this.context.Topics.Where(top => top.LectureID == lecture.LectureID);

                    var matchedLecture = course.Lectures.FirstOrDefault(l => l.LectureID == lecture.LectureID);

                    if(matchedLecture == null) {
                        System.Console.WriteLine( "Lecture not found");
                        this.context.Remove(lecture);
                    }

                    foreach(var topic in topics.ToList()) {

                        var matchedTopic = lecture.Topics.FirstOrDefault(t => t.TopicID == topic.TopicID);

                        if(matchedLecture == null) {
                            System.Console.WriteLine( "Topic not found");
                            this.context.Remove(topic);
                        }
                    }
                }
                
                courseEntity.Lectures = course.Lectures;
                courseEntity.LastUpdatedByID = course.UserID;
                courseEntity.LastUpdatedDate = DateTime.Now;

                await this.context.SaveChangesAsync();

                return course;
            }
            throw new Exception("Courses not found");
        }
    }
}