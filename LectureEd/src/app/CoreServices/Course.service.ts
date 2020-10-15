import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseModel } from '../InternalViews/CreateView/CreateLectureLayout/Course.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../Authentication/Authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.apiUrl + 'course/';
  public activeUserId: number;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.activeUserId = authenticationService.activeUser.id;
  }

  public getCoursesByUserId() {
    return this.http.get<CourseModel[]>(this.baseUrl + 'GetCourses/' + this.activeUserId);
  }

}
