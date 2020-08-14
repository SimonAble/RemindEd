using System;
using System.Threading.Tasks;
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

        public async Task<Course> SaveCourse(Course course)
        {
            await this.context.AddAsync(course);
            await this.context.SaveChangesAsync();

            return course;
        }
    }
}
