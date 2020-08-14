import { Injectable } from '@angular/core';
import { CourseModel } from './Course.model';
import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateCourseService {

  private baseUrl = "http://localhost:5000/api/course/"

  constructor(private http: HttpClient) {
  }

  public saveCourse(course: CourseModel) {
    console.log("Saving Course");
    return this.http.post(this.baseUrl + 'SaveCourse', course)
      .pipe(
        map((res: any) => {
          const user = res;
          if(user) {
            localStorage.setItem('token', user.token);
          }
        })
      )
  }

  public getCourse() {
    let course = new CourseModel();
    return course;
  }
}
