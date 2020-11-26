import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseModel, CourseInfoModel } from '../CoreModels/Course.model';
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
    return this.http.get<CourseModel[]>(`${this.baseUrl}GetCourses/${this.activeUserId}`);
  }

  public getRecentlyViewed(returnedCourses: number) {
    return this.http.get<CourseInfoModel[]>(`${this.baseUrl}GetCourses/RecentlyViewed/${this.activeUserId}/${returnedCourses}`);
  }

  public getRecentlyCreated(returnedCourses: number) {
    return this.http.get<CourseInfoModel[]>(`${this.baseUrl}GetCourses/RecentlyCreated/${this.activeUserId}/${returnedCourses}`);
  }

  public getCoursesForLearning() {
    return this.http.get<CourseInfoModel[]>(this.baseUrl + 'GetCourses/ForLearning/' + this.activeUserId);
  }

  public getCoursesForTeaching() {
    return this.http.get<CourseInfoModel[]>(this.baseUrl + 'GetCourses/ForTeaching/' + this.activeUserId);
  }

  public getCoursesForGlobalExplore() {
    return this.http.get<CourseInfoModel[]>(this.baseUrl + 'GetCoursesForGlobalExplore');
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

  public followCourse(courseId: number) {
    return this.http.put(this.baseUrl + 'FollowCourse/' + this.activeUserId, courseId);
  }

  public unfollowCourse(courseId: number) {
    return this.http.put(this.baseUrl + 'UnfollowCourse/' + this.activeUserId, courseId);
  }

}
