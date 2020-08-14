import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CreateLeftMenuModel, Lecture } from './CreateLeftMenu.model';
import { CreateLeftMenuService } from './CreateLeftMenu.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';
import { CourseModel } from '../CreateLectureLayout/Course.model';

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
  @Input() course: CourseModel;

  public leftMenuToggled: boolean = false;
  public editMenuTitle: boolean = false;
  public editLectureIndex: number;
  public editLectureToggled: boolean = false;

  //public leftMenu: CreateLeftMenuModel;
  public leftMenuTitle: string;
  public lectureItem: string;
  public addNewLectureToggled: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.course.lectures, event.previousIndex, event.currentIndex);
  }

  constructor(private leftMenuService: CreateLeftMenuService) { }

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
    this.course.courseTitle = this.leftMenuTitle;
    this.editMenuTitle = false;
    console.log(this.course.courseTitle);
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
      this.course.lectures.push(new Lecture(this.lectureItem, false, new LectureNavigationModel()));
      this.lectureItem = "";
      this.addNewLectureToggled = false;

      let newLecturePosition = this.course.lectures.length - 1;
      console.log("New lecture position: ", newLecturePosition);
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

  deleteLecture(lecture, index) {
    console.log(JSON.stringify(lecture));
    console.log(index);
    this.emitDeleteLectureContent.emit(index);
  }

  viewLecture(lecture, index) {
    console.log(JSON.stringify(lecture));
    console.log(index);
    this.emitChangeActiveLecture.emit(index);
  }
}
