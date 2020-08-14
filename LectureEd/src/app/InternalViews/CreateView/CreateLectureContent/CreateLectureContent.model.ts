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
  title: string;
  contents: string;

  constructor(topicName: string, topicActive: boolean = false, title: string = "", contents: string = "") {
    this.topicName = topicName;
    this.topicActive = topicActive;
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
