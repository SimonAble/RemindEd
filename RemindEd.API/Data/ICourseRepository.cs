using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public interface ICourseRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<Course> SaveCourse(Course course);
        Task<Course> UpdateCourse(Course course);
        Task<IEnumerable<CourseInfoDTO>> GetCourses();
        Task<Course> GetCourseByCourseId(int id);
        Task<IEnumerable<CourseInfoDTO>> GetCoursesByUserId(int userId);
        Task<IEnumerable<CourseInfoDTO>> GetLearningCoursesByUserId(int userId);
        Task<IEnumerable<CourseInfoDTO>> GetTeachingCoursesByUserId(int userId);
        Task<IEnumerable<CourseInfoDTO>> GetRecentlyViewed(int userId, int recordsReturned);
        Task<IEnumerable<CourseInfoDTO>> GetRecentlyCreated(int userId, int recordsReturned);
        void DeleteCourseById(int courseId);
        void FollowCourse(int userId, int courseId);
        void UnfollowCourse(int userId, int courseId);
        // Task<IEnumerable<Course>> GetCoursesByUserId(int id);

    }
}
