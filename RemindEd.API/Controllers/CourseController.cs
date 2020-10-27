using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RemindEd.API.Data;
using RemindEd.API.DTO;
using RemindEd.API.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        public async Task<IActionResult> UpdateCourse(int id)
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
    }
}
