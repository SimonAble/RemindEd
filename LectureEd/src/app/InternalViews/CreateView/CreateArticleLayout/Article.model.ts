import { TopicContentModel } from '../CreateLectureContent/CreateLectureContent.model';

export class Article {
  topicId: string;
  topicContents: TopicContentModel;

  constructor() {
    this.topicContents = new TopicContentModel();
  }
}
