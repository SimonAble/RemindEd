import { Component, OnInit } from '@angular/core';
import { LectureNavigationModel } from './CreateLectureContent.model';
import { CreateLectureContentService } from './CreateLectureContent.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-CreateLectureContent',
  templateUrl: './CreateLectureContent.component.html',
  styleUrls: ['./CreateLectureContent.component.css']
})
export class CreateLectureContentComponent implements OnInit {

  public navTopicModel: LectureNavigationModel;
  public showDelay = new FormControl(500);
  public hideDelay = new FormControl(500);

  constructor(private lectureContentService: CreateLectureContentService) { }

  ngOnInit() {
    this.getLectureNavigationTopics();
  }

  public getLectureNavigationTopics() {
    this.navTopicModel = this.lectureContentService.getNavigationTopics();
  }

}
