import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';

export class CourseModel {
  // leftMenu: CreateLeftMenuModel;
  courseID: number;
  courseTitle: string;
  userId: number;
  lectures: Lecture[];
  createdDate: Date;
  lastUpdatedDate: Date;
  courseFollowers: CourseFollower[];
  courseFollowed: boolean;

  constructor() {
    this.lectures = [];
  }
}

export class CourseFollower {
  courseId: number;
  userId: number;
}
