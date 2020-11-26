import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-CourseCardPlaceholder',
  templateUrl: './CourseCardPlaceholder.component.html',
  styleUrls: ['./CourseCardPlaceholder.component.css']
})
export class CourseCardPlaceholderComponent implements OnInit {
  @Input() placeholderMessage: string;
  randomNumber: number;

  constructor() { }

  ngOnInit() {
    this.setRandomNumber();
  }

  setRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

}
