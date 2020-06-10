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
  topicActive: boolean;

  constructor(topicName: string, topicActive: boolean = false) {
    this.topicName = topicName;
    this.topicActive = topicActive;
  }
}
