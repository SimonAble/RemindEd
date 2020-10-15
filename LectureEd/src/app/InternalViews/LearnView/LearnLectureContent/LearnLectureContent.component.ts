import { Component, OnInit } from '@angular/core';
import { LearnLectureContentService } from './LearnLectureContent.service';
import { LectureNavigationModel } from './LearnLectureContent.model';

@Component({
  selector: 'app-LearnLectureContent',
  templateUrl: './LearnLectureContent.component.html',
  styleUrls: ['./LearnLectureContent.component.css']
})
export class LearnLectureContentComponent implements OnInit {

  public navTopicModel: LectureNavigationModel;
  constructor(private lectureContentService: LearnLectureContentService) { }

  ngOnInit() {
    this.getLectureNavigationTopics();
  }

  public getLectureNavigationTopics() {
    this.navTopicModel = this.lectureContentService.getNavigationTopics();
  }

}
