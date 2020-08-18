using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        [HttpPost("SaveCourse")]
        public async Task<IActionResult> SaveCourse(Course course)
        {

            Console.WriteLine("Saving Course");

            // var courseFromRepo = this.courseRepository.GetCourseByCourseId(course.CourseID);
            var savedCourse = this.courseRepository.SaveCourse(course);
            if(await savedCourse != null)
                return Created("Course Created", course);

            throw new Exception($"Updating course with id: {course.CourseID} failed...");
        }

        [HttpPut("UpdateCourse")]
        public async Task<IActionResult> UpdateCourse(Course course)
        {

            Console.WriteLine("Saving Course");

            var courseFromRepo = this.courseRepository.GetCourseByCourseId(course.CourseID);
            
            if(await courseRepository.SaveAll())
                return NoContent();

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


    }
}
