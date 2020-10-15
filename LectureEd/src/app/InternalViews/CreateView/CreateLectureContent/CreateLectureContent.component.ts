import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { LectureNavigationModel, Topic } from './CreateLectureContent.model';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LearningModuleModalComponent } from '../LearningModules/LearningModuleModal/LearningModuleModal.component';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { CoLabEditorComponent } from 'src/app/CoreComponents/CoLabEditor/CoLabEditor.component';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { CreateCourseService } from 'src/app/CoreServices/CreateCourse.service';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  @ViewChild('editor') editorComponent: CoLabEditorComponent;

  @Input() activeLecture: Lecture;
  @Output() emitSaveCourse = new EventEmitter<LectureNavigationModel>();

  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);

  public addNewNavTopic: boolean = false;
  public navTopicItem: string;

  public activeTopic: Topic;
  public activeTopicIndex: number;

  public editTopicToggled: boolean;
  public editTopicIndex: number;

  public autosaveInProgress: boolean = true;

  constructor(private titleService: Title,
    private materialService: MaterialService,
    public dialog: MatDialog,
    public courseService: CreateCourseService) { }

  ngOnInit() {
    //this.getLectureNavigationTopics();
    this.titleService.setTitle("CoLab | Create");
  }

  ngOnChanges() {
    if(this.activeLecture && this.activeLecture.topics.length > 0) {
      this.switchActiveTopic(0);
    }
    else {
      this.activeTopic = null;
    }
  }

  // public getLectureNavigationTopics() {
  //   this.navTopicModel = this.lectureContentService.getNavigationTopics();
  //   this.getActiveTab();
  // }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeLecture.topics, event.previousIndex, event.currentIndex);
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
          data: { topicTabName: this.navTopicItem }
        });

        dialogRef.afterClosed().subscribe(result => {
          let topicType = result.topicType;

          if(topicType) {
            this.activeLecture.topics.push(new Topic(this.navTopicItem));

            let newTopicIndex = this.activeLecture.topics.length - 1;
            this.activeTopic = this.activeLecture.topics[newTopicIndex];
            this.activeTopic.topicTypeCode = topicType;

            console.log("Logging active topic: ", JSON.stringify(this.activeTopic));
            this.switchActiveTopic(newTopicIndex);

            this.navTopicItem = "";
            this.addNewNavTopic = false;
          }
        });
    }
  }

  public switchActiveTopic(activeIndex:number) {

    this.activeTopic = this.activeLecture.topics[activeIndex];
    this.activeTopic.topicActive = true;
    this.activeTopicIndex = activeIndex;

    for(let i = 0; i < this.activeLecture.topics.length; i++) {
      if(i != activeIndex) {
        this.activeLecture.topics[i].topicActive = false;
      }
    }

    console.log("Logging active topic: ", JSON.stringify(this.activeTopic));
  }

  public saveCourseContents(topicContents?: Topic) {

    this.courseService.saving = true;
    console.log("Topic Contents: ", topicContents);
    if(topicContents) {
      this.activeLecture.topics[this.activeTopicIndex].topicTitle = topicContents.topicTitle;
      this.activeLecture.topics[this.activeTopicIndex].topicContents = topicContents.topicContents;
    }

    this.emitSaveCourse.emit(this.activeLecture);
  }

  public toggleEditTopic(topic, index) {
    this.editTopicToggled = true;
    this.editTopicIndex = index;
  }

  public addTopicTabName() {
    this.editTopicToggled = false;
    this.editTopicIndex = null;
  }

  public deleteTopic(index) {
    console.log(index);
    this.activeLecture.topics.splice(index, 1);

    if(this.activeLecture.topics.length > 0) {
      this.activeTopic = this.activeLecture.topics[0];
    }
    if(this.activeLecture.topics.length === 0) {
      this.activeTopic = null;
    }
  }
}
