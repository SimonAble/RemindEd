using System;
using System.Threading.Tasks;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public interface ICourseRepository
    {
        Task<Course> SaveCourse(Course course);
    }
}
