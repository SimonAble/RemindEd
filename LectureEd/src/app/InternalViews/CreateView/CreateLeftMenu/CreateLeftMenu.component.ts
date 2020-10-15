import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CreateLeftMenuModel, Lecture } from './CreateLeftMenu.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CreateCourseService } from '../../../CoreServices/CreateCourse.service';

@Component({
  selector: 'app-CreateLeftMenu',
  templateUrl: './CreateLeftMenu.component.html',
  styleUrls: ['./CreateLeftMenu.component.css']
})
export class CreateLeftMenuComponent implements OnInit {

  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();
  @Output() emitChangeActiveLecture = new EventEmitter<number>();
  @Output() emitCreateLectureContent = new EventEmitter<number>();
  @Output() emitDeleteLectureContent = new EventEmitter<number>();

  public leftMenuToggled: boolean = false;
  public editMenuTitle: boolean = false;
  public editLectureIndex: number;
  public editLectureToggled: boolean = false;

  //public leftMenu: CreateLeftMenuModel;
  public leftMenuTitle: string;
  public lectureItem: string;
  public addNewLectureToggled: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.courseService.courseModel.lectures, event.previousIndex, event.currentIndex);
  }

  constructor(public courseService: CreateCourseService) { }

  ngOnInit() {
    // this.getLeftMenu();
    // this.leftMenu.leftMenuTitle = "Title";
  }

  toggleLeftMenu() {
    console.log("Toggling Left Menu");
    this.leftMenuToggled = ! this.leftMenuToggled;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
  }

  addCourseTitle() {
    this.courseService.courseModel.courseTitle = this.leftMenuTitle;
    this.editMenuTitle = false;
  }

  toggleEditCourseTitle() {
    this.editMenuTitle = !this.editMenuTitle;
  }

  toggleLectureItemInput() {
    this.leftMenuToggled = false;
    this.emitToggleLeftMenu.emit(this.leftMenuToggled);
    this.addNewLectureToggled = !this.addNewLectureToggled;
  }

  addNewLectureItem() {
    if(this.lectureItem !== "") {
      console.log("Adding new Lecture item");
      this.courseService.courseModel.lectures.push(new Lecture(this.lectureItem, false));
      this.lectureItem = "";
      this.addNewLectureToggled = false;

      let newLecturePosition = this.courseService.courseModel.lectures.length - 1;
      this.emitCreateLectureContent.emit(newLecturePosition);
    }
  }

  editLecture(lecture, index) {
    this.editLectureToggled = true;
    this.editLectureIndex = index;
  }

  addLectureName() {
    this.editLectureToggled = true;
    this.editLectureIndex = null;
  }

  deleteLecture(index) {
    console.log(index);
    this.emitDeleteLectureContent.emit(index);
  }

  viewLecture(lecture, index) {
    console.log(JSON.stringify(lecture));
    console.log(index);
    this.emitChangeActiveLecture.emit(index);
  }
}
