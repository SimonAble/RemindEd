import { Component, OnInit } from '@angular/core';
import { Topic, TopicContentModel, TopicTypes } from '../CreateLectureContent/CreateLectureContent.model';
import { Article } from './Article.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-CreateArticleLayout',
  templateUrl: './CreateArticleLayout.component.html',
  styleUrls: ['./CreateArticleLayout.component.css']
})
export class CreateArticleLayoutComponent implements OnInit {

  public article: Topic = new Topic("Test");
  public topicTypes = TopicTypes;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.article.topicTypeCode = this.topicTypes.Article;
  }

  public setActiveTopicContents(topicContents: TopicContentModel) {

    this.article.topicContents.title = topicContents.title;
    this.article.topicContents.contents = topicContents.contents;

    this.openSnackBar("Article Saved Successfully!");
  }

  public openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['snackbarSuccess'];
    config.duration = 2000;
    this._snackBar.open(message, "Close", config);
  }

}
