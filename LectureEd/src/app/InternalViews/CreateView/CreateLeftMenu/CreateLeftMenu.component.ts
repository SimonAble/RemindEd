import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateLeftMenuModel, Lecture } from './CreateLeftMenu.model';
import { CreateLeftMenuService } from './CreateLeftMenu.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-CreateLeftMenu',
  templateUrl: './CreateLeftMenu.component.html',
  styleUrls: ['./CreateLeftMenu.component.css']
})
export class CreateLeftMenuComponent implements OnInit {

  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();
  public leftMenuToggled: boolean = false;
  public editMenuTitle: boolean = false;
  public leftMenu: CreateLeftMenuModel;
  public leftMenuTitle: string;
  public lectureItem: string;
  public addNewLectureToggled: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.leftMenu.lectures, event.previousIndex, event.currentIndex);
  }

  constructor(private leftMenuService: CreateLeftMenuService) { }

  ngOnInit() {
    this.getLeftMenu();
  }

  toggleLeftMenu() {
    console.log("Toggling Left Menu");
    this.leftMenuToggled = ! this.leftMenuToggled;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
  }

  getLeftMenu() {
    this.leftMenu = this.leftMenuService.getCreateLeftMenuItems();
    console.log(JSON.stringify(this.leftMenu));
  }

  saveLeftMenu() {
    this.leftMenuService.saveCreateLeftMenuItems(this.leftMenu);
  }

  addCourseTitle() {
    this.leftMenu.leftMenuTitle = this.leftMenuTitle;
    this.editMenuTitle = false;
    console.log(this.leftMenu.leftMenuTitle);
  }

  toggleEditCourseTitle() {
    this.editMenuTitle = !this.editMenuTitle;
  }

  toggleLectureItemInput() {
    this.addNewLectureToggled = !this.addNewLectureToggled;
  }

  addNewLectureItem() {
    if(this.lectureItem !== "") {
      this.leftMenu.lectures.push(new Lecture(this.lectureItem));
      this.lectureItem = "";
      this.addNewLectureToggled = false;
    }
  }

}
