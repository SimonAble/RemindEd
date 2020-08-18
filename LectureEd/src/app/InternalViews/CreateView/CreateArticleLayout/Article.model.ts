import { Topic } from '../CreateLectureContent/CreateLectureContent.model';

export class Article {
  topicTitle: string;
  topicContents: string;

  constructor(topicTitle: string = "", topicContents: string = "") {
    this.topicTitle = topicTitle;
    this.topicContents = topicContents;
  }
}
