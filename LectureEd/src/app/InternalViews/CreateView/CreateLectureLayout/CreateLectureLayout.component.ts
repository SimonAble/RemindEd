import { Component, OnInit } from '@angular/core';
import { Course } from './Course.model';

@Component({
  selector: 'app-CreateLectureLayout',
  templateUrl: './CreateLectureLayout.component.html',
  styleUrls: ['./CreateLectureLayout.component.css']
})
export class CreateLectureLayoutComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public courseModel: Course;

  constructor() { }

  ngOnInit() {
  }

  public toggleLeftMenu(event) {
    console.log("In parent toggling");
    this.leftMenuCollapsed = event;
  }

}
