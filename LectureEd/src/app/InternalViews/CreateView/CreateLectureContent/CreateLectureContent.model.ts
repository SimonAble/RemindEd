export class LectureNavigationModel {
  lectureId: string;
  lectureTopics: Topic[];

  constructor(lectureTopics: Topic[] = []) {
    this.lectureTopics = lectureTopics;
  }
}

export class Topic {
  topicId: string;
  topicName: string;
  topicActive: boolean;
  topicTypeCode: TopicTypes;
  topicContents: TopicContentModel;

  constructor(topicName: string, topicActive: boolean = false) {
    this.topicName = topicName;
    this.topicActive = topicActive;
    this.topicContents = new TopicContentModel();
  }
}

export class TopicContentModel {
  title: string;
  contents: string;

  constructor(title: string = "", contents: string = "") {
    this.title = title;
    this.contents = contents;
  }
}

export enum TopicTypes {
  Custom = "custom",
  Article = "article",
  Resources = "resources",
  Questions = "questions",
  Concept = "concept",
  Video = "video",
  Discussion = "discussion",
  Application = "application",
  Movie = "movie",
  //Used to route user to suggestions page
  Suggestion = "suggestion"
}
