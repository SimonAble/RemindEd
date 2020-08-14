import { Component, OnInit } from '@angular/core';
import { Topic, TopicTypes } from '../CreateLectureContent/CreateLectureContent.model';
import { Article } from './Article.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { MaterialService } from 'src/app/CoreServices/Material.service';

@Component({
  selector: 'app-CreateArticleLayout',
  templateUrl: './CreateArticleLayout.component.html',
  styleUrls: ['./CreateArticleLayout.component.css']
})
export class CreateArticleLayoutComponent implements OnInit {

  public article: Topic = new Topic("Test");
  public topicTypes = TopicTypes;

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.article.topicTypeCode = this.topicTypes.Article;
  }

  public setActiveTopicContents(topicContents: Topic) {

    this.article.title = topicContents.title;
    this.article.contents = topicContents.contents;

    this.materialService.openSnackBar("Article Saved Successfully!");
  }
}
