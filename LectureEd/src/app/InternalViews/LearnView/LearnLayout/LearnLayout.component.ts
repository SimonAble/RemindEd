import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { CourseModel } from '../../../CoreModels/Course.model';
import { CreateCourseService } from '../../../CoreServices/CreateCourse.service';
import { LectureNavigationModel, Topic } from '../LearnLectureContent/LearnLectureContent.model';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { Lecture } from '../LearnLeftMenu/LearnLeftMenu.model';
import { ActivatedRoute } from '@angular/router';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';

@Component({
  selector: 'app-LearnLectureLayout',
  templateUrl: './LearnLayout.component.html',
  styleUrls: ['./LearnLayout.component.css']
})
export class LearnLayoutComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public activeLecture: Lecture;
  public courseId;

  constructor(
    public courseService: CreateCourseService,
    private authService: AuthenticationService,
    private materialService: MaterialService,
    private location: Location,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params =>
        this.courseId = params['id']
      );
    }

  ngOnInit() {
    this.getCourse();
  }

  public getCourse() {
    if(this.courseId) {
      this.courseService.getCourse(this.courseId)
      .subscribe( (res: CourseModel) => {
        this.courseService.courseModel = res;
        console.log("Getting course model: ", JSON.stringify(this.courseService.courseModel));
        let lectures = this.courseService.courseModel.lectures;
        if(lectures.length > 0) {
          this.activeLecture = this.courseService.courseModel.lectures[0];
          this.activeLecture.lectureActive = true;
        }
      });
    }
  }

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  public changeActiveLecture(event) {
    console.log("Event emitted from left menu: ", event);
    this.activeLecture = this.courseService.courseModel.lectures[event];
    this.switchActiveLecture(event);
  }

  public switchActiveLecture(index) {
    console.log("Switching active lecture: ", event);
    for(let i = 0; i < this.courseService.courseModel.lectures.length; i++) {
      if (i === index) {
        this.courseService.courseModel.lectures[i].lectureActive = true;
      }
      else {
        this.courseService.courseModel.lectures[i].lectureActive = false;
      }
    }
  }
}
