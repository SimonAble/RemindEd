import { Component, OnInit } from '@angular/core';
import { LectureNavigationModel, LectureTopic } from './CreateLectureContent.model';
import { CreateLectureContentService } from './CreateLectureContent.service';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  public navTopicModel: LectureNavigationModel;
  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);
  public addNewNavTopic: boolean = false;
  public navTopicItem: string;

  constructor(private lectureContentService: CreateLectureContentService) { }

  ngOnInit() {
    this.getLectureNavigationTopics();
  }

  public getLectureNavigationTopics() {
    this.navTopicModel = this.lectureContentService.getNavigationTopics();
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.navTopicModel.lectureTopics, event.previousIndex, event.currentIndex);
  }

  public toggleNavItemInput() {
    this.addNewNavTopic = !this.addNewNavTopic;
  }

  public addNewNavTopicItem() {
    if(this.navTopicItem !== "") {
      this.navTopicModel.lectureTopics.push(new LectureTopic(this.navTopicItem));
      this.navTopicItem = "";
      this.addNewNavTopic = false;
    }
  }

}
