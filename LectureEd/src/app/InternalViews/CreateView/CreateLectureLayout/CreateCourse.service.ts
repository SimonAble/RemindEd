import { Injectable } from '@angular/core';
import { CourseModel } from './Course.model';
import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CreateCourseService {

  public courseModel:CourseModel = new CourseModel();
  private baseUrl = environment.apiUrl + 'course/';

  constructor(private http: HttpClient) {
  }

  public createCourse(course: CourseModel) {
    console.log("Saving Course");
    return this.http.post(this.baseUrl + 'CreateCourse', course);
  }

  public saveCourse(course: CourseModel) {
    console.log("Updating Course");
    return this.http.put(this.baseUrl + 'UpdateCourse', course);
  }

  public getCourse(courseId:number) {
    return this.http.get<CourseModel>(this.baseUrl + 'GetCourse/' + courseId);
  }
}
