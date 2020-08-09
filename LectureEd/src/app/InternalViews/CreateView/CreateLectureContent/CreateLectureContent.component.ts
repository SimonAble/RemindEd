import { Component, OnInit, Input } from '@angular/core';
import { LectureNavigationModel, LectureTopic } from './CreateLectureContent.model';
import { CreateLectureContentService } from './CreateLectureContent.service';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { LearningModuleModalComponent } from '../LearningModules/LearningModuleModal/LearningModuleModal.component';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  @Input() activeLecture: LectureNavigationModel;
  //public activeLecture: LectureNavigationModel;
  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);
  public addNewNavTopic: boolean = false;
  public navTopicItem: string;
  public activeTabName: string;
  public activeTopic: LectureTopic;

  constructor(private titleService: Title, private lectureContentService: CreateLectureContentService, public dialog: MatDialog) { }

  ngOnInit() {
    //this.getLectureNavigationTopics();
    this.titleService.setTitle("CoLab | Create")
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

  // public addNewNavTopicItem() {
  //   if(this.navTopicItem !== "") {
  //     this.activeLecture.lectureTopics.push(new LectureTopic(this.navTopicItem));
  //     this.navTopicItem = "";
  //     this.addNewNavTopic = false;

  //     let newTopicIndex = this.activeLecture.lectureTopics.length - 1;
  //     this.activeTopic = this.activeLecture.lectureTopics[newTopicIndex];
  //   }
  // }

  public addNewNavTopicItem(): void {

      if(this.navTopicItem !== "") {

        const dialogRef = this.dialog.open(LearningModuleModalComponent, {
          data: { topicName: this.navTopicItem }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);

          let topicType = result.topicType;

          console.log("Topic Type: ", topicType);
          if(topicType) {
            this.activeLecture.lectureTopics.push(new LectureTopic(this.navTopicItem));
            this.navTopicItem = "";
            this.addNewNavTopic = false;

            let newTopicIndex = this.activeLecture.lectureTopics.length - 1;
            this.activeTopic = this.activeLecture.lectureTopics[newTopicIndex];
          }
        });
    }
  }

  public getActiveTab() {

    this.activeLecture.lectureTopics.forEach(topic => {
      if( topic.topicActive ) {
        this.activeTabName = topic.topicName;
      }
    });
  }

}
