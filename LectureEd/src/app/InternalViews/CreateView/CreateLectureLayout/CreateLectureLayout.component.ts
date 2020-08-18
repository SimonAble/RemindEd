import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { CourseModel } from './Course.model';
import { CreateCourseService } from './CreateCourse.service';
import { LectureNavigationModel, Topic } from '../CreateLectureContent/CreateLectureContent.model';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';
import { Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CreateLectureLayout',
  templateUrl: './CreateLectureLayout.component.html',
  styleUrls: ['./CreateLectureLayout.component.css']
})
export class CreateLectureLayoutComponent implements OnInit {

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

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  public changeActiveLecture(event) {
    console.log("Event emitted from left menu: ", event);
    this.activeLecture = this.courseService.courseModel.lectures[event];
    this.switchActiveLecture(event);
  }

  public createNewLectureContent(event) {
    console.log("Creating new lecture content: ", event);
    this.activeLecture = this.courseService.courseModel.lectures[event];

    this.switchActiveLecture(event);
  }

  public deleteLectureContent(event) {
    console.log("Deleting lecture content: ", event);
    this.courseService.courseModel.lectures.splice(event, 1);
    if(this.courseService.courseModel.lectures.length > 0) {
      this.activeLecture = this.courseService.courseModel.lectures[0];
    }
    if(this.courseService.courseModel.lectures.length === 0) {
      this.activeLecture = null;
    }
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

  public saveCourse(lecture) {
    console.log("Saving course");
    this.courseService.courseModel.userId = this.authService.activeUser.id;
    console.log(JSON.stringify(this.courseService.courseModel));

    this.courseService.saveCourse(this.courseService.courseModel)
      .subscribe(
        (res) => {
          this.location.replaceState('/create/course/' + res['courseID']);
          this.materialService.openSnackBar("Course Saved Successfully!");
        },
        error => {
          this.materialService.openSnackBar('Error saving course: ' + error);
        });
  }
}
