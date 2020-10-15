import { Injectable } from '@angular/core';
import { CourseModel } from '../InternalViews/CreateView/CreateLectureLayout/Course.model';
import { CreateLeftMenuModel, Lecture } from '../InternalViews/CreateView/CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { AuthenticationService } from '../Authentication/Authentication.service';
import { UserContext } from '../CoreModels/UserContext.model';

@Injectable({
  providedIn: 'root'
})

export class CreateCourseService {

  public courseModel:CourseModel = new CourseModel();
  private baseUrl = environment.apiUrl + 'course/';
  public saving: boolean = false;

  autoSaveTimer: Observable<number> = timer(0, 30000);

  constructor(private http: HttpClient) {}

  public createCourse(course: CourseModel) {
    console.log("Saving Course");
    return this.http.post(this.baseUrl + 'CreateCourse', course);
  }

  public saveCourse(course: CourseModel) {
    console.log("Updating Course");
    return this.http.put(this.baseUrl + 'UpdateCourse', course)
      .pipe();
  }

  public getCourse(courseId:number) {
    return this.http.get<CourseModel>(this.baseUrl + 'GetCourse/' + courseId);
  }

  public autosaveCourse() {
    console.log("Autosaving Course");
    return this.http.put(this.baseUrl + 'UpdateCourse', this.courseModel);
  }
}
