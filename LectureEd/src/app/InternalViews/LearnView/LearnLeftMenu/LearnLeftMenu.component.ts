import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-LearnLeftMenu',
  templateUrl: './LearnLeftMenu.component.html',
  styleUrls: ['./LearnLeftMenu.component.css']
})
export class LearnLeftMenuComponent implements OnInit {

  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();
  public leftMenuToggled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLeftMenu() {
    console.log("Toggling Left Menu");
    this.leftMenuToggled = ! this.leftMenuToggled;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
  }


}
