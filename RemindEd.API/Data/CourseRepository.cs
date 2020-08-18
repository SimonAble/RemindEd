using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
            this.context.Courses.Add(course);
            this.context.SaveChanges();

            return course;
        }
    }
}