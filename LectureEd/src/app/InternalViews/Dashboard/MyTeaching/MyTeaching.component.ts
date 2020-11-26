import { Component, OnInit } from '@angular/core';
import { MenuItem, LeftMenuModel } from 'src/app/CoreComponents/LeftMenu/LeftMenuModel';
import { CourseModel, CourseInfoModel } from '../../../CoreModels/Course.model';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ConfirmationModalComponent } from 'src/app/CoreComponents/ConfirmationModal/ConfirmationModal.component';

@Component({
  selector: 'app-MyTeaching',
  templateUrl: './MyTeaching.component.html',
  styleUrls: ['./MyTeaching.component.css']
})
export class MyTeachingComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courses: CourseInfoModel[] = [];
  public leftMenuItems: LeftMenuModel = new LeftMenuModel();
  public placeholder:string = "Your created courses will show up here..."

  constructor(private courseService: CourseService, private router:Router, public dialog: MatDialog, private titleService: Title) { }

  ngOnInit() {
    this.getCoursesForUser();
    this.titleService.setTitle("CoLab | MyTeaching");
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
    this.courseService.getCoursesForTeaching()
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

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

}
