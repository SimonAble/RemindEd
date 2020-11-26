import { Component, OnInit } from '@angular/core';
import { MenuItem, LeftMenuModel } from 'src/app/CoreComponents/LeftMenu/LeftMenuModel';
import { ArticleModel } from 'src/app/CoreModels/Article.model';
import { ArticleService } from 'src/app/CoreServices/Article.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ConfirmationModalComponent } from 'src/app/CoreComponents/ConfirmationModal/ConfirmationModal.component';
import { AuthenticationService } from 'src/app/Authentication/Authentication.service';

@Component({
  selector: 'app-MyResources',
  templateUrl: './MyResources.component.html',
  styleUrls: ['./MyResources.component.css']
})
export class MyResourcesComponent implements OnInit {

  public leftMenuCollapsed: boolean = false;
  public articles: ArticleModel[] = [];
  public leftMenuItems: LeftMenuModel = new LeftMenuModel();
  public placeholder:string = "Your created articles will show up here..."

  constructor(private articleService: ArticleService, private router:Router, public dialog: MatDialog, private titleService: Title, private authService: AuthenticationService) { }

  ngOnInit() {
    this.getArticlesForUser();
    this.titleService.setTitle("CoLab | Articles");
  }

  deleteArticle(courseId: number, index: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: {title: "Confirm Course Deletion", confirmationText: "Are you sure you would like to delete this course?"}
    });

    dialogRef.afterClosed().subscribe(hasConfirmed => {
      console.log('The dialog was closed');
      if(hasConfirmed) {
        console.log("Deleting Course");
        this.articleService.deleteArticleById(courseId);
        this.articles.splice(index, 1);
      }
      else {
        console.log("Canceled Course Deletion");
      }
    });
  }

  getArticlesForUser() {
    console.log("Getting Articles for user")
    this.articleService.getArticlesByUserId(this.authService.activeUser.id)
      .subscribe( res => {
        this.articles = res;
        console.log("Articles: " + JSON.stringify(this.articles));
      })
  }

  public toggleLeftMenu(event) {
    console.log("Toggling left menu: ", event);
    this.leftMenuCollapsed = event;
  }

  navigateToCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId]);
  }

  viewCourse(courseId:number) {
    this.router.navigate(['learn/course/' + courseId])
  }

}
