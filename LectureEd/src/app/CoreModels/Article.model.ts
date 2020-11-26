export class ArticleModel {
  // leftMenu: CreateLeftMenuModel;
  articleID: number;
  articleTitle: string;
  articleContents: string;
  userID: number;
  createdDate: Date;
  lastUpdatedDate: Date;
  articleFollowers: ArticleFollower[];
  articleFollowed: boolean;
}

export class ArticleInfoModel {
  // leftMenu: CreateLeftMenuModel;
  articleID: number;
  articleTitle: string;
  articleDescription: string;
  userID: number;
  creatorName: string;
  articleFollowers: ArticleFollower[];
  articleFollowed: boolean;
  createdDate: Date;
  lastUpdatedDate: Date;
  progress: number;
  overallGrade: number;
  numTakingArticle: number;
  avgArticleRating: number;
}

export class ArticleFollower {
  articleId: number;
  userId: number;
}
