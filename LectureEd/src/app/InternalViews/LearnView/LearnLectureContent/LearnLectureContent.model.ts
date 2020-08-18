export class LectureNavigationModel {
  lectureId: string;
  topics: LectureTopic[];

  constructor(topics: LectureTopic[]) {
    this.topics = topics;
  }
}

export class LectureTopic {
  topicId: string;
  topicTabName: string;

  constructor(topicTabName: string) {
    this.topicTabName = topicTabName;
  }
}
