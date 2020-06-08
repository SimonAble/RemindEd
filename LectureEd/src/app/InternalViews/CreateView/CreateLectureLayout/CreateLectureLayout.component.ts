import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CreateLectureLayout',
  templateUrl: './CreateLectureLayout.component.html',
  styleUrls: ['./CreateLectureLayout.component.css']
})
export class CreateLectureLayoutComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleLeftMenu(event) {
    console.log("In parent toggling");
    this.leftMenuCollapsed = event;
  }

}
