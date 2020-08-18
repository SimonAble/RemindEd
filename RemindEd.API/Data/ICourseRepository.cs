using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public interface ICourseRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<Course> SaveCourse(Course course);
        Task<IEnumerable<Course>> GetCourses();
        Task<Course> GetCourseByCourseId(int id);
        // Task<IEnumerable<Course>> GetCoursesByUserId(int id);

    }
}
