import { Component, OnInit } from '@angular/core';
import { MenuItem, LeftMenuModel } from 'src/app/CoreComponents/LeftMenu/LeftMenuModel';
import { CourseModel, CourseInfoModel } from '../../../CoreModels/Course.model';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ConfirmationModalComponent } from 'src/app/CoreComponents/ConfirmationModal/ConfirmationModal.component';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';

@Component({
  selector: 'app-MyLearning',
  templateUrl: './MyLearning.component.html',
  styleUrls: ['./MyLearning.component.css']
})
export class MyLearningComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courses: CourseInfoModel[] = [];
  public leftMenuItems: LeftMenuModel = new LeftMenuModel();
  public placeholder:string = "Your learning will show up here..."

  constructor(private courseService: CourseService, private router:Router, public dialog: MatDialog, private titleService: Title, private materialService:MaterialService) { }

  ngOnInit() {
    this.getCoursesForUser();
    this.setLeftMenu();
    this.titleService.setTitle("CoLab | MyLearning");
  }

  deleteCourse(courseId: number, index: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: {title: "Confirm Course Deletion", confirmationText: "Are you sure you would like to delete this course?"}
    });

    dialogRef.afterClosed().subscribe(hasConfirmed => {
      console.log('The dialog was closed');
      if(hasConfirmed) {
        console.log("Deleting Course");
        this.courseService.deleteCourseById(courseId);
        this.courses.splice(index, 1);
      }
      else {
        console.log("Canceled Course Deletion");
      }
    });
  }

  getCoursesForUser() {
    this.courseService.getCoursesForLearning()
      .subscribe( res => {
        this.courses = res;
        console.log(JSON.stringify(this.courses));
      })
  }

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId]);
  }

  navigateToDashboard() {

  }

  setLeftMenu() {
    this.leftMenuItems.leftMenuTitle = "Dashboard";
    this.leftMenuItems.menuItems.push(new MenuItem('Overview', false, 'Overview', 'dashboard', true));
    this.leftMenuItems.menuItems.push(new MenuItem('My Teaching', false, 'My Teaching','post_add', true));
    this.leftMenuItems.menuItems.push(new MenuItem('My Learning', true, 'My Learning', 'library_books', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Articles', false, 'Articles', 'library_books', true));
    this.leftMenuItems.menuItems.push(new MenuItem('Student Portal', false, 'Look forward to this feature in a future update!', 'assignment_ind', false));
    this.leftMenuItems.menuItems.push(new MenuItem('Grading Portal', false, 'Look forward to this feature in a future update!', 'grade', false));
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

  unfollowCourse(courseID: number) {
    console.log("Unfollowing Course");
    this.courseService.unfollowCourse(courseID)
      .subscribe(
        next => {
          var followedCourse = this.courses.find(c => c.courseID == courseID);

          followedCourse.courseFollowed = false;
        // this.router.navigate(['dashboard']);
        this.materialService.openSnackBar("Course Dropped!")
      }, error => {
        console.log("Error: ", error);
        this.materialService.openSnackBar("Hm, something went wrong when following the course...", SnackBarStateClass.Error)
      });
  }

}
