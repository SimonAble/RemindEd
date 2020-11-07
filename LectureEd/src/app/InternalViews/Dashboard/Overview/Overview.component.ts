import { Component, OnInit } from '@angular/core';
import { ConfirmationModalComponent } from 'src/app/CoreComponents/ConfirmationModal/ConfirmationModal.component';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { Router } from '@angular/router';
import { CourseModel } from '../../CreateView/CreateLectureLayout/Course.model';

@Component({
  selector: 'app-Overview',
  templateUrl: './Overview.component.html',
  styleUrls: ['./Overview.component.css']
})
export class OverviewComponent implements OnInit {

  public courses: CourseModel[] = [];

  constructor(private courseService: CourseService, private router:Router, public dialog: MatDialog, private titleService: Title) { }

  ngOnInit() {
    this.getCoursesForUser();
    this.titleService.setTitle("CoLab | Dashboard");
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
    this.courseService.getCoursesByUserId()
      .subscribe( res => {
        this.courses = res;
        console.log(JSON.stringify(this.courses));
      })
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['create/course/' + courseId]);
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }


}
