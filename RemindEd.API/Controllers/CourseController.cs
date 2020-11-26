using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RemindEd.API.Data;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : Controller
    {
        private readonly ICourseRepository courseRepository;

        public CourseController(ICourseRepository courseRepository)
        {
            this.courseRepository = courseRepository;
        }

        //[AllowAnonymous]
        [HttpPost("CreateCourse")]
        public async Task<IActionResult> CreateCourse(Course course)
        {

            Console.WriteLine("Course Id is null: Creating new course");

            var savedCourse = this.courseRepository.SaveCourse(course);
            if(await savedCourse != null)
                return Created("Course Created", course);

            throw new Exception($"Creating new course failed...");

        }

        [HttpPut("UpdateCourse")]
        public async Task<IActionResult> UpdateCourse(Course course)
        {
            var savedCourse = this.courseRepository.UpdateCourse(course);
            Console.WriteLine($"Updating Course with Id {course.CourseID}");
            if(await savedCourse != null) 
                return Ok(course);
            throw new Exception($"Updating course with id: {course.CourseID} failed...");
        }

        [HttpGet("GetCourse/{id}")]
        public async Task<IActionResult> GetCourse(int id)
        {
            Console.WriteLine("Saving Course");

            var courseFromRepo = await this.courseRepository.GetCourseByCourseId(id);
            
            if(courseFromRepo != null)
                return Ok(courseFromRepo);

            throw new Exception($"Could not retrieve course with id: {id}...");
        }

        [HttpGet("GetCourses/{userId}")]
        public async Task<IActionResult> GetCoursesForUser(int userId) {
            var coursesFromRepo = await this.courseRepository.GetCoursesByUserId(userId);

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses with id: {userId}...");
        }

        [HttpGet("GetCourses/RecentlyViewed/{userId}/{recordsReturned}")]
        public async Task<IActionResult> GetRecentlyViewedCourses(int userId, int recordsReturned) {
            var coursesFromRepo = await this.courseRepository.GetRecentlyViewed(userId, recordsReturned);

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses with id: {userId}...");
        }

        [HttpGet("GetCourses/RecentlyCreated/{userId}/{recordsReturned}")]
        public async Task<IActionResult> GetRecentlyCreatedCourses(int userId, int recordsReturned) {
            var coursesFromRepo = await this.courseRepository.GetRecentlyCreated(userId, recordsReturned);

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses with id: {userId}...");
        }

        [HttpGet("GetCourses/ForLearning/{userId}")]
        public async Task<IActionResult> GetLearningForUser(int userId) {
            var coursesFromRepo = await this.courseRepository.GetLearningCoursesByUserId(userId);

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses with id: {userId}...");
        }

        [HttpGet("GetCourses/ForTeaching/{userId}")]
        public async Task<IActionResult> GetTeachingsForUser(int userId) {
            var coursesFromRepo = await this.courseRepository.GetTeachingCoursesByUserId(userId);

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses with id: {userId}...");
        }

        [AllowAnonymous]
        [HttpGet("GetCoursesForGlobalExplore")]
        public async Task<IActionResult> GetCourses() {
            var coursesFromRepo = await this.courseRepository.GetCourses();

            if(coursesFromRepo != null) 
                return Ok(coursesFromRepo);

            throw new Exception($"Could not retrieve courses...");
        }

        [HttpDelete("DeleteCourse/{courseId}")]
        public IActionResult DeleteCourseById(int courseId) {
            
            this.courseRepository.DeleteCourseById(courseId);

            return Ok();
        }

        [HttpPut("FollowCourse/{userId}")]
        public IActionResult FollowCourse(int userId, [FromBody] int courseId) {

            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            this.courseRepository.FollowCourse(userId, courseId);

            return Ok();
        }

        [HttpPut("UnfollowCourse/{userId}")]
        public IActionResult UnfollowCourse(int userId, [FromBody] int courseId) {

            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            this.courseRepository.UnfollowCourse(userId, courseId);

            return Ok();
        }
    }
}
