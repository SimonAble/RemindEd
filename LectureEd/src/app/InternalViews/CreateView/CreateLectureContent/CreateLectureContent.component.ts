import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LectureNavigationModel, LectureTopic, TopicContentModel } from './CreateLectureContent.model';
import { CreateLectureContentService } from './CreateLectureContent.service';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { LearningModuleModalComponent } from '../LearningModules/LearningModuleModal/LearningModuleModal.component';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { EACCES } from 'constants';
import { CoLabEditorComponent } from 'src/app/CoreComponents/CoLabEditor/CoLabEditor.component';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  @ViewChild('editor') editorComponent: CoLabEditorComponent;
  @Input() activeLecture: LectureNavigationModel;

  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);

  public addNewNavTopic: boolean = false;
  public navTopicItem: string;

  public activeTopic: LectureTopic;
  public activeTopicIndex: number;

  public editTopicToggled: boolean;
  public editTopicIndex: number;

  constructor(private titleService: Title,
    private lectureContentService: CreateLectureContentService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    //this.getLectureNavigationTopics();
    this.titleService.setTitle("CoLab | Create");
  }

  ngOnChanges() {
    console.log("OnChanges Event Triggered in Lecture Content");
    if(this.activeLecture && this.activeLecture.lectureTopics.length > 0) {
      console.log(JSON.stringify(this.activeLecture));
      this.activeTopic = this.activeLecture.lectureTopics[0];
    }
  }

  // public getLectureNavigationTopics() {
  //   this.navTopicModel = this.lectureContentService.getNavigationTopics();
  //   this.getActiveTab();
  // }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeLecture.lectureTopics, event.previousIndex, event.currentIndex);
  }

  public dropMovie(event: CdkDragDrop<string[]>) {
    //moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  public toggleNavItemInput() {
    this.addNewNavTopic = !this.addNewNavTopic;
  }

  public addNewNavTopicItem(): void {

      if(this.navTopicItem !== "") {

        const dialogRef = this.dialog.open(LearningModuleModalComponent, {
          data: { topicName: this.navTopicItem }
        });

        dialogRef.afterClosed().subscribe(result => {
          let topicType = result.topicType;

          if(topicType) {
            this.activeLecture.lectureTopics.push(new LectureTopic(this.navTopicItem));

            let newTopicIndex = this.activeLecture.lectureTopics.length - 1;
            this.activeTopic = this.activeLecture.lectureTopics[newTopicIndex];
            this.activeTopic.topicContents = new TopicContentModel();

            this.switchActiveTopic(newTopicIndex);

            this.navTopicItem = "";
            this.addNewNavTopic = false;
          }
        });
    }
  }

  public switchActiveTopic(activeIndex:number) {

    this.activeTopic = this.activeLecture.lectureTopics[activeIndex];
    this.activeTopic.topicActive = true;
    this.activeTopicIndex = activeIndex;

    for(let i = 0; i < this.activeLecture.lectureTopics.length; i++) {
      if(i != activeIndex) {
        this.activeLecture.lectureTopics[i].topicActive = false;
      }
    }
  }

  public setActiveTopicContents(topicContents: TopicContentModel) {

    this.activeLecture.lectureTopics[this.activeTopicIndex].topicContents.title = topicContents.title;
    this.activeLecture.lectureTopics[this.activeTopicIndex].topicContents.contents = topicContents.contents;

    this.openSnackBar("Course Saved Successfully!");
  }

  public toggleEditTopic(topic, index) {
    this.editTopicToggled = true;
    this.editTopicIndex = index;
  }

  public addTopicName() {
    this.editTopicToggled = false;
    this.editTopicIndex = null;
  }

  public  deleteTopic(topic, index) {
    console.log(JSON.stringify(topic));
    console.log(index);
    this.activeLecture.lectureTopics.splice(index, 1);

    if(this.activeLecture.lectureTopics.length > 0) {
      this.activeTopic = this.activeLecture.lectureTopics[0];
    }
    if(this.activeLecture.lectureTopics.length === 0) {
      this.activeTopic = null;
    }
  }

  public openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['snackbarSuccess'];
    config.duration = 2000;
    this._snackBar.open(message, "Close", config);
  }
}
