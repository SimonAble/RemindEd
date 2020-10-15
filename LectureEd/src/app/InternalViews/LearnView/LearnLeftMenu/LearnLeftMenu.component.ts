import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LearnLeftMenuModel } from './LearnLeftMenu.model';
import { LearnLeftMenuService } from './LearnLeftMenu.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-LearnLeftMenu',
  templateUrl: './LearnLeftMenu.component.html',
  styleUrls: ['./LearnLeftMenu.component.css']
})
export class LearnLeftMenuComponent implements OnInit {

  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();
  public leftMenuToggled: boolean = false;
  public leftMenu: LearnLeftMenuModel;
  public showDelay = new FormControl(1000);
  public hideDelay = new FormControl(500);

  constructor(private leftMenuService: LearnLeftMenuService) { }

  ngOnInit() {
    this.getLeftMenu();
  }

  toggleLeftMenu() {
    console.log("Toggling Left Menu");
    this.leftMenuToggled = ! this.leftMenuToggled;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
  }

  getLeftMenu() {
    this.leftMenu = this.leftMenuService.getLearnLeftMenuItems();
    console.log(JSON.stringify(this.leftMenu));
  }


}
