import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Title } from '@angular/platform-browser';
import { CourseModel } from 'src/app/InternalViews/LearnView/LearnLayout/Course.model';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';
import { CourseInfoModel } from 'src/app/CoreModels/Course.model';

@Component({
  selector: 'app-ExploreGlobal',
  templateUrl: './ExploreGlobal.component.html',
  styleUrls: ['./ExploreGlobal.component.css']
})
export class ExploreGlobalComponent implements OnInit {

  public courses: CourseInfoModel[] = [];

  constructor(private courseService: CourseService, private router:Router, private titleService: Title, private materialService: MaterialService) { }

  ngOnInit() {
    this.getCourses();
    this.titleService.setTitle("CoLab | Explore");
  }

  getCourses() {
    this.courseService.getCoursesForGlobalExplore()
      .subscribe( res => {
        this.courses = res;

        this.courses.forEach(course => {
          course.courseFollowers.forEach( follower => {
            if(follower.userId == this.courseService.activeUserId) {
              course.courseFollowed = true;
            }
          })
        });

        console.log(JSON.stringify(this.courses));
      })
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId]);
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

  followCourse(courseID: number) {
    console.log("Following Course");
    this.courseService.followCourse(courseID)
      .subscribe(
        next => {
          var followedCourse = this.courses.find(c => c.courseID == courseID);

          followedCourse.courseFollowed = true;
        // this.router.navigate(['dashboard']);
        this.materialService.openSnackBar("Course Added Successfully!")
      }, error => {
        console.log("Error: ", error);
        if(this.courseService.activeUserId) {
          this.materialService.openSnackBar("Hm, something went wrong when following the course...", SnackBarStateClass.Error)
        }
        else {
          this.materialService.openSnackBar("You must be logged in to follow courses...", SnackBarStateClass.Error)
        }

      });
  }

  unfollowCourse(courseID: number) {
    console.log("Unfollowing Course");
    this.courseService.unfollowCourse(courseID)
      .subscribe(
        next => {
          var followedCourse = this.courses.find(c => c.courseID == courseID);

          followedCourse.courseFollowed = false;
        // this.router.navigate(['dashboard']);
        this.materialService.openSnackBar("Course Dropped!")
      }, error => {
        console.log("Error: ", error);
        this.materialService.openSnackBar("Hm, something went wrong when following the course...", SnackBarStateClass.Error)
      });
  }
}
