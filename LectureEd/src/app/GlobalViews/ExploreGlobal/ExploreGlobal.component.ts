import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Title } from '@angular/platform-browser';
import { CourseModel } from 'src/app/InternalViews/LearnView/LearnLayout/Course.model';

@Component({
  selector: 'app-ExploreGlobal',
  templateUrl: './ExploreGlobal.component.html',
  styleUrls: ['./ExploreGlobal.component.css']
})
export class ExploreGlobalComponent implements OnInit {

  public courses: CourseModel[] = [];

  constructor(private courseService: CourseService, private router:Router, private titleService: Title) { }

  ngOnInit() {
    this.getCourses();
    this.titleService.setTitle("CoLab | Explore");
  }

  getCourses() {
    this.courseService.getCoursesForGlobalExplore()
      .subscribe( res => {
        this.courses = res;
        // console.log(JSON.stringify(this.courses));
      })
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId]);
  }

}
