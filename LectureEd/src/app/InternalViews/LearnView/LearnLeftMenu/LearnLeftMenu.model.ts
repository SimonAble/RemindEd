import { Topic } from '../LearnLectureContent/LearnLectureContent.model';

export class CreateLeftMenuModel {
  lectureId: string;
  leftMenuTitle: string;
  lectures: Lecture[];

  constructor() {
    this.lectures = [];
  }
}

export class Lecture {
  lectureId: string;
  lectureName: string;
  lectureViewed: boolean;
  lectureCompleted: boolean;
  lectureLocked: boolean;
  lectureActive: boolean;
  topics: Topic[];

  //Todo: remove this once db tables are completed
  constructor(lectureName: string, lectureActive: boolean, topics: Topic[] = []) {
    this.lectureName = lectureName;
    this.lectureActive = lectureActive;
    this.topics = topics;
  }
}
