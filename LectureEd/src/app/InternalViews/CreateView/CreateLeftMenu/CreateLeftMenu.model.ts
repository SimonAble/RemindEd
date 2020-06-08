export class CreateLeftMenuModel {
  lectureId: string;
  leftMenuTitle: string;
  lectures: Lecture[];

  constructor(leftMenuTitle: string, lectures: Lecture[]) {
    this.leftMenuTitle = leftMenuTitle;
    this.lectures = lectures;
  }
}

export class Lecture {
  lectureId: string;
  lectureName: string;
  lectureViewed: boolean;
  lectureCompleted: boolean;
  lectureLocked: boolean;

  //Todo: remove this once db tables are completed
  constructor(lectureName: string) {
    this.lectureName = lectureName;
  }
}
