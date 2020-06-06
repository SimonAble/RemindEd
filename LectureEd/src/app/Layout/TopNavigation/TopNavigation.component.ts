import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TopNavigation',
  templateUrl: './TopNavigation.component.html',
  styleUrls: ['./TopNavigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  public loginToggled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
