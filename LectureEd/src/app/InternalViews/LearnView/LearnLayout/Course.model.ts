import { CreateLeftMenuModel, Lecture } from '../LearnLeftMenu/LearnLeftMenu.model';
import { LectureNavigationModel } from '../LearnLectureContent/LearnLectureContent.model';

export class CourseModel {
  // leftMenu: CreateLeftMenuModel;
  courseID: number;
  courseTitle: string;
  courseDescription: string;
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

