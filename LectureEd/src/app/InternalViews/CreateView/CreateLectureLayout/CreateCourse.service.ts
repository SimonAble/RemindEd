import { Injectable } from '@angular/core';
import { CourseModel } from './Course.model';
import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';

@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

constructor() { }

  public getCourse() {
    let course = new CourseModel(
      new CreateLeftMenuModel("CourseModel Test", [])
    )
    return course;
  }
}
