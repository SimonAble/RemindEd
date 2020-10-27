import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CreateLeftMenuModel, Lecture } from './LearnLeftMenu.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CreateCourseService } from '../../../CoreServices/CreateCourse.service';

@Component({
  selector: 'app-LearnLeftMenu',
  templateUrl: './LearnLeftMenu.component.html',
  styleUrls: ['./LearnLeftMenu.component.css']
})
export class LearnLeftMenuComponent implements OnInit {

  @Output() emitToggleLeftMenu = new EventEmitter<boolean>();
  @Output() emitChangeActiveLecture = new EventEmitter<number>();
  @Output() emitLearnLectureContent = new EventEmitter<number>();
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
    console.log("Viewing Lecture");
    console.log(JSON.stringify(lecture));
    console.log(index);
    this.emitChangeActiveLecture.emit(index);
  }
}
