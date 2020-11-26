import { Component, OnInit, Input, Output } from '@angular/core';
import { CourseModel, CourseInfoModel } from 'src/app/CoreModels/Course.model';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '../ConfirmationModal/ConfirmationModal.component';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-CourseCard',
  templateUrl: './CourseCard.component.html',
  styleUrls: ['./CourseCard.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: CourseInfoModel;
  randomNumber: number;

  constructor(protected courseService: CourseService, private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.setRandomNumber();
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
        // this.courses.splice(index, 1);
      }
      else {
        console.log("Canceled Course Deletion");
      }
    });
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['create/course/' + courseId]);
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

  setRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

}
