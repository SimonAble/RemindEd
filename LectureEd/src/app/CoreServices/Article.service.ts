import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleModel } from '../CoreModels/Article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = environment.apiUrl + 'article/';
  public saving: boolean = false;

  autoSaveTimer: Observable<number> = timer(0, 30000);

  constructor(private http: HttpClient) { }

  public createArticle(article: ArticleModel) {
    console.log("Saving article");
    return this.http.post(this.baseUrl + 'CreateArticle', article);
  }

  public saveArticle(article: ArticleModel) {
    console.log("Updating article");
    return this.http.put(this.baseUrl + 'UpdateArticle', article)
      .pipe();
  }

  public getArticle(articleId:number) {
    return this.http.get<ArticleModel>(this.baseUrl + 'GetArticle/' + articleId);
  }

  public getArticlesByUserId(userId:number) {
    return this.http.get<ArticleModel[]>(this.baseUrl + 'GetArticles/' + userId);
  }

  public deleteArticleById(articleId:number) {
    return this.http.get<ArticleModel>(this.baseUrl + 'GetArticle/' + articleId);
  }

}
