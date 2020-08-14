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

            //Topic topic = new Topic();
            //Lecture lecture = new Lecture();
            //Course testCourse = new Course();


            //topic.TopicContents = "Test Contents";
            //topic.TopicTabName = "Test Tab Name";
            //topic.TopicTitle = "Test topic title";
            //topic.TopicTypeCode = TopicTypeCode.Application;

            //lecture.LectureName = "Test Lecture";
            //lecture.Topics = new Collection<Topic>();
            //lecture.Topics.Add(topic);
            //lecture.CreatedByID = 2;
            //lecture.CreatedDate = DateTime.Now;
            //lecture.LastUpdatedByID = 2;
            //lecture.LastUpdatedDate = DateTime.Now;

            //testCourse.CourseTitle = "Title";
            //testCourse.Lectures = new Collection<Lecture>();
            //testCourse.Lectures.Add(lecture);
            //testCourse.CreatedByID = 2;
            //testCourse.CreatedDate = DateTime.Now;
            //testCourse.LastUpdatedByID = 2;
            //testCourse.LastUpdatedDate = DateTime.Now;

            //Console.Write(testCourse.CourseTitle);

            var savedCourse = await courseRepository.SaveCourse(course);

            return Ok(savedCourse);
        }


    }
}
