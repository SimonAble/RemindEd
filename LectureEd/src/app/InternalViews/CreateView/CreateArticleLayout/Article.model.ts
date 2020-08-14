import { Topic } from '../CreateLectureContent/CreateLectureContent.model';

export class Article {
  title: string;
  contents: string;

  constructor(title: string = "", contents: string = "") {
    this.title = title;
    this.contents = contents;
  }
}
