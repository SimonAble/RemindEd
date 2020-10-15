import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LeftMenuModel } from './LeftMenuModel';

@Component({
  selector: 'app-LeftMenu',
  templateUrl: './LeftMenu.component.html',
  styleUrls: ['./LeftMenu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Input() leftMenu: LeftMenuModel;
  leftMenuToggled: boolean = false;
  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleLeftMenu() {
    console.log("Toggling Left Menu");
    this.leftMenuToggled = !this.leftMenuToggled;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
  }
}
