import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { LectureNavigationModel, Topic, TopicTypes } from './LearnLectureContent.model';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { LearningModuleModalComponent } from '../LearningModules/LearningModuleModal/LearningModuleModal.component';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { CoLabEditorComponent } from 'src/app/CoreComponents/CoLabEditor/CoLabEditor.component';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { Lecture } from '../LearnLeftMenu/LearnLeftMenu.model';
import { CreateCourseService } from 'src/app/CoreServices/CreateCourse.service';

@Component({
  selector: 'app-LearnLectureContent',
  templateUrl: './LearnLectureContent.component.html',
  styleUrls: ['./LearnLectureContent.component.css']
})
export class LearnContentComponent implements OnInit {

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
  public topicType = TopicTypes;

  constructor(private titleService: Title,
    private materialService: MaterialService,
    public dialog: MatDialog,
    public courseService: CreateCourseService) { }

  ngOnInit() {
    //this.getLectureNavigationTopics();
    this.titleService.setTitle("CoLab | Learn");
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
