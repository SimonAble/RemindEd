import { Component, OnInit } from '@angular/core';
import { Topic, TopicTypes } from '../CreateLectureContent/CreateLectureContent.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { MaterialService } from 'src/app/CoreServices/Material.service';
import { CourseService } from 'src/app/CoreServices/Course.service';
import { ArticleService } from 'src/app/CoreServices/Article.service';
import { ArticleModel } from 'src/app/CoreModels/Article.model';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { SnackBarStateClass } from 'src/app/CoreModels/enum';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';

@Component({
  selector: 'app-CreateArticleLayout',
  templateUrl: './CreateArticleLayout.component.html',
  styleUrls: ['./CreateArticleLayout.component.css']
})
export class CreateArticleLayoutComponent implements OnInit {

  public articleTopic: Topic = new Topic("Article");
  public topicTypes = TopicTypes;
  public article: ArticleModel = new ArticleModel();
  public articleId: number;

  constructor(
    private authService: AuthenticationService,
    private materialService: MaterialService,
    protected articleService: ArticleService,
    private location: Location,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params =>
        this.articleId = params['id']
      );
    }

  //todo: create article editor rather than use CoLabEditor
  ngOnInit() {
    this.articleTopic.topicTypeCode = this.topicTypes.Article;
    if(this.authService.activeUser.id) {
      this.article.userID = this.authService.activeUser.id;
    }

    this.getArticle();
  }

  getArticle() {
    console.log("Getting Article for user")
    if(this.articleId) {
      this.articleService.getArticle(this.articleId)
      .subscribe( res => {
        this.article = res;
        this.articleTopic.topicContents = this.article.articleContents;
        console.log("Articles: " + JSON.stringify(this.article));
      })
    }
  }

  public saveArticle(topicContents: string) {

    console.log("Topic Contents: ", topicContents);

    this.article.articleContents = topicContents;

    if(!this.authService.activeUser) {
      this.materialService.openSnackBar('You must be logged in to save an article... ', SnackBarStateClass.Error);
    }
    else {
      this.articleService.saving = true;

      if(this.articleId) {
        this.articleService.saveArticle(this.article)
        .subscribe(
          (res) => {
            setTimeout(() => {
              this.materialService.openSnackBar("Article Saved Successfully!");
              this.articleService.saving = false;
            }, 600);
          },
          error => {
            this.materialService.openSnackBar('Error saving article: ' + error.error, SnackBarStateClass.Error);
            this.articleService.saving = false;
          });
      }
      else {
        this.articleService.createArticle(this.article)
        .subscribe(
          (res) => {
            this.location.replaceState('/create/article/' + res['articleID']);

            setTimeout(() => {
              this.materialService.openSnackBar("Article Saved Successfully!");
              this.articleService.saving = false;
            }, 600);
          },
          error => {
            this.materialService.openSnackBar('Error saving article: ' + error.error, SnackBarStateClass.Error);
            this.articleService.saving = false;
          });
      }
    }
  }
}
