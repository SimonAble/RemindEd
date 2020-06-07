export class LectureNavigationModel {
  lectureId: string;
  lectureTopics: LectureTopic[];

  constructor(lectureTopics: LectureTopic[]) {
    this.lectureTopics = lectureTopics;
  }
}

export class LectureTopic {
  topicId: string;
  topicName: string;

  constructor(topicName: string) {
    this.topicName = topicName;
  }
}
