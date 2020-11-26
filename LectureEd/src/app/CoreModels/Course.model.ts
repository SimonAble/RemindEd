import { CreateLeftMenuModel, Lecture } from '../InternalViews/CreateView/CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../InternalViews/CreateView/CreateLectureContent/CreateLectureContent.model';

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

export class CourseInfoModel {
  // leftMenu: CreateLeftMenuModel;
  courseID: number;
  courseTitle: string;
  courseDescription: string;
  userID: number;
  creatorName: string;
  courseFollowers: CourseFollower[];
  courseFollowed: boolean;
  createdDate: Date;
  lastUpdatedDate: Date;
  progress: number;
  overallGrade: number;
  numTakingCourse: number;
  avgCourseRating: number;
  avgCompletedCourse: number;
}

export class CourseFollower {
  courseId: number;
  userId: number;
}
