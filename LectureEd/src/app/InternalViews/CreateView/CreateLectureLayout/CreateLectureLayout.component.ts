import { Component, OnInit } from '@angular/core';
import { CourseModel } from './Course.model';
import { CreateCourseService } from './CreateCourse.service';
import { LectureNavigationModel, LectureTopic } from '../CreateLectureContent/CreateLectureContent.model';

@Component({
  selector: 'app-CreateLectureLayout',
  templateUrl: './CreateLectureLayout.component.html',
  styleUrls: ['./CreateLectureLayout.component.css']
})
export class CreateLectureLayoutComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courseModel: CourseModel;
  public activeLecture: LectureNavigationModel;

  constructor(private courseService: CreateCourseService) { }

  ngOnInit() {
    this.getCourse();
  }

  public getCourse() {
    this.courseModel = this.courseService.getCourse();
    console.log("Getting course model: ", JSON.stringify(this.courseModel));
    let lectures = this.courseModel.leftMenu.lectures;
    if(lectures.length > 0) {
      this.activeLecture = this.courseModel.leftMenu.lectures[0].lectureContent;
    }
  }

  public toggleLeftMenu(event) {
    console.log("In parent toggling");
    this.leftMenuCollapsed = event;
  }

  public changeActiveLecture(event) {
    console.log("Event emitted from left menu: ", event);
    this.activeLecture = this.courseModel.leftMenu.lectures[event].lectureContent;
    this.switchActiveLecture(event);
  }

  public createNewLectureContent(event) {
    console.log("Creating new lecture content: ", event);
    this.courseModel.leftMenu.lectures[event].lectureContent = new LectureNavigationModel();
    this.activeLecture = this.courseModel.leftMenu.lectures[event].lectureContent;

    this.switchActiveLecture(event);
  }

  public deleteLectureContent(event) {
    this.courseModel.leftMenu.lectures.splice(event, 1);
    if(this.courseModel.leftMenu.lectures.length > 0) {
      this.activeLecture = this.courseModel.leftMenu.lectures[0].lectureContent;
    }
  }

  public switchActiveLecture(index) {
    for(let i = 0; i < this.courseModel.leftMenu.lectures.length; i++) {
      if (i === index) {
        this.courseModel.leftMenu.lectures[i].lectureActive = true;
      }
      else {
        this.courseModel.leftMenu.lectures[i].lectureActive = false;
      }
    }
  }
}
