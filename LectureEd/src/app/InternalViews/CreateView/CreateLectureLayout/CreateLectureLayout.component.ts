import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseModel } from './Course.model';
import { CreateCourseService } from './CreateCourse.service';
import { LectureNavigationModel, Topic } from '../CreateLectureContent/CreateLectureContent.model';
import { MaterialService } from 'src/app/CoreServices/Material.service';

@Component({
  selector: 'app-CreateLectureLayout',
  templateUrl: './CreateLectureLayout.component.html',
  styleUrls: ['./CreateLectureLayout.component.css']
})
export class CreateLectureLayoutComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courseModel: CourseModel;
  public activeLecture: LectureNavigationModel;

  constructor(
    private courseService: CreateCourseService,
    private materialService: MaterialService) { }

  ngOnInit() {
    this.getCourse();
  }

  public getCourse() {
    this.courseModel = this.courseService.getCourse();
    console.log("Getting course model: ", JSON.stringify(this.courseModel));
    let lectures = this.courseModel.lectures;
    if(lectures.length > 0) {
      this.activeLecture = this.courseModel.lectures[0].lectureContent;
    }
  }

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  public changeActiveLecture(event) {
    console.log("Event emitted from left menu: ", event);
    this.activeLecture = this.courseModel.lectures[event].lectureContent;
    this.switchActiveLecture(event);
  }

  public createNewLectureContent(event) {
    console.log("Creating new lecture content: ", event);
    this.courseModel.lectures[event].lectureContent = new LectureNavigationModel();
    this.activeLecture = this.courseModel.lectures[event].lectureContent;

    this.switchActiveLecture(event);
  }

  public deleteLectureContent(event) {
    console.log("Deleting lecture content: ", event);
    this.courseModel.lectures.splice(event, 1);
    if(this.courseModel.lectures.length > 0) {
      this.activeLecture = this.courseModel.lectures[0].lectureContent;
    }
    if(this.courseModel.lectures.length === 0) {
      this.activeLecture = null;
    }
  }

  public switchActiveLecture(index) {
    console.log("Switching active lecture: ", event);
    for(let i = 0; i < this.courseModel.lectures.length; i++) {
      if (i === index) {
        this.courseModel.lectures[i].lectureActive = true;
      }
      else {
        this.courseModel.lectures[i].lectureActive = false;
      }
    }
  }

  public saveCourse(lecture) {
    console.log("Saving course");
    console.log(this.courseModel);

    this.materialService.openSnackBar("Course Saved Successfully!");
  }
}
