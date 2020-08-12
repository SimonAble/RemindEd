import { Component, OnInit } from '@angular/core';
import { LectureTopic, TopicContentModel } from '../CreateLectureContent/CreateLectureContent.model';
import { Article } from './Article.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-CreateArticleLayout',
  templateUrl: './CreateArticleLayout.component.html',
  styleUrls: ['./CreateArticleLayout.component.css']
})
export class CreateArticleLayoutComponent implements OnInit {

  public article: Article = new Article();

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
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
