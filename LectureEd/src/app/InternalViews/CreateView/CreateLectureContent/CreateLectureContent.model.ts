export class LectureNavigationModel {
  lectureId: string;
  lectureTopics: LectureTopic[];

  constructor(lectureTopics: LectureTopic[] = []) {
    this.lectureTopics = lectureTopics;
  }
}

export class LectureTopic {
  topicId: string;
  topicName: string;
  topicActive: boolean;
  topicTypeCode: TopicTabTypes;
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

export enum TopicTabTypes {
  Custom = "custom",
  History = "history",
  Resources = "resources",
  Questions = "questions",
  Concept = "concept",
  Video = "video",
  Discussion = "discussion",
  Application = "application",
  Movie = "movie"
}
