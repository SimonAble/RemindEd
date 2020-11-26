import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from 'src/app/CoreModels/Article.model';
import { ArticleService } from 'src/app/CoreServices/Article.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmationModalComponent } from '../ConfirmationModal/ConfirmationModal.component';

@Component({
  selector: 'app-ArticleCard',
  templateUrl: './ArticleCard.component.html',
  styleUrls: ['./ArticleCard.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: ArticleModel;
  randomNumber: number;

  constructor(protected articleService: ArticleService, private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.setRandomNumber();
  }

  deleteArticle(articleId: number, index: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      data: {title: "Confirm Course Deletion", confirmationText: "Are you sure you would like to delete this course?"}
    });

    dialogRef.afterClosed().subscribe(hasConfirmed => {
      console.log('The dialog was closed');
      if(hasConfirmed) {
        console.log("Deleting Course");
        this.articleService.deleteArticleById(articleId);
        // this.courses.splice(index, 1);
      }
      else {
        console.log("Canceled Course Deletion");
      }
    });
  }

  navigateToArticle(articleId:number) {
    this.router.navigate(['create/article/' + articleId]);
  }

  viewArticle(articleId:number) {
    this.router.navigate(['learn/article/' + articleId])
  }

  setRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }


}
