import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { LectureNavigationModel, Topic } from './CreateLectureContent.model';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LearningModuleModalComponent } from '../LearningModules/LearningModuleModal/LearningModuleModal.component';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { CoLabEditorComponent } from 'src/app/CoreComponents/CoLabEditor/CoLabEditor.component';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { CourseModel } from '../CreateLectureLayout/Course.model';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  @ViewChild('editor') editorComponent: CoLabEditorComponent;

  @Input() activeLecture: LectureNavigationModel;
  @Output() emitSaveCourse = new EventEmitter<LectureNavigationModel>();

  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);

  public addNewNavTopic: boolean = false;
  public navTopicItem: string;

  public activeTopic: Topic;
  public activeTopicIndex: number;

  public editTopicToggled: boolean;
  public editTopicIndex: number;

  constructor(private titleService: Title,
    private materialService: MaterialService,
    public dialog: MatDialog) { }

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
            this.activeLecture.lectureTopics.push(new Topic(this.navTopicItem));

            let newTopicIndex = this.activeLecture.lectureTopics.length - 1;
            this.activeTopic = this.activeLecture.lectureTopics[newTopicIndex];
            // this.activeTopic.topicContents = new TopicContentModel();
            this.activeTopic.topicTypeCode = topicType;
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

  public saveCourseContents(topicContents: Topic) {

    this.activeLecture.lectureTopics[this.activeTopicIndex].title = topicContents.title;
    this.activeLecture.lectureTopics[this.activeTopicIndex].contents = topicContents.contents;

    this.emitSaveCourse.emit(this.activeLecture);
  }

  public toggleEditTopic(topic, index) {
    this.editTopicToggled = true;
    this.editTopicIndex = index;
  }

  public addTopicName() {
    this.editTopicToggled = false;
    this.editTopicIndex = null;
  }

  public deleteTopic(topic, index) {
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
}
