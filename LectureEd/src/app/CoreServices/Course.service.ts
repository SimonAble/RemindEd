import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseModel } from '../InternalViews/CreateView/CreateLectureLayout/Course.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../Authentication/Authentication.service';
import { MaterialService } from './Material.service';
import { SnackBarStateClass } from '../CoreModels/enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.apiUrl + 'course/';
  public activeUserId: number;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private materialService: MaterialService) {
    this.activeUserId = authenticationService.activeUser.id;
  }

  public getCoursesByUserId() {
    return this.http.get<CourseModel[]>(this.baseUrl + 'GetCourses/' + this.activeUserId);
  }

  public getCoursesForGlobalExplore() {
    return this.http.get<CourseModel[]>(this.baseUrl + 'GetCoursesForGlobalExplore');
  }

  public deleteCourseById(courseId: number) {
    console.log("In Course Service Deleting Course with Id: " + courseId);

    return this.http.delete(this.baseUrl + 'DeleteCourse/' + courseId)
      .subscribe(
        next => {
        // this.router.navigate(['dashboard']);
        this.materialService.openSnackBar("Course Deletion Succesful!")
      }, error => {
        console.log("Error: ", error);
        this.materialService.openSnackBar("Hm, something went wrong when deleting the course...", SnackBarStateClass.Error)
      })
  }

}
