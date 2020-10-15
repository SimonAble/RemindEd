import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-CreateCourse',
  templateUrl: './CreateCourse.component.html',
  styleUrls: ['./CreateCourse.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  public navigateToArticleCreation() {
    this.router.navigate(['create', 'article']);
  }

  public navigateToCourseCreation() {
    this.router.navigate(['create', 'course']);
  }
}
