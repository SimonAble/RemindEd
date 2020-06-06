import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-LearnLayout',
  templateUrl: './LearnLayout.component.html',
  styleUrls: ['./LearnLayout.component.css']
})
export class LearnLayoutComponent implements OnInit {
  public leftMenuCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleLeftMenu(event) {
    console.log("In parent toggling");
    this.leftMenuCollapsed = event;
  }
}
