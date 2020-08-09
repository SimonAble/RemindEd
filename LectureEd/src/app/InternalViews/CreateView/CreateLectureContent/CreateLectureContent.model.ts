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

  constructor(topicName: string, topicActive: boolean = false) {
    this.topicName = topicName;
    this.topicActive = topicActive;
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
