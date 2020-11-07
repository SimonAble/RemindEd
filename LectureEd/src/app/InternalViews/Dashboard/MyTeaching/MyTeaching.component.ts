import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-MyTeaching',
  templateUrl: './MyTeaching.component.html',
  styleUrls: ['./MyTeaching.component.css']
})
export class MyTeachingComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("CoLab | Dashboard");
  }

}
