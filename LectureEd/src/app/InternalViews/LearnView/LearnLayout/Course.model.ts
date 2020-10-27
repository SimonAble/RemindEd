import { CreateLeftMenuModel, Lecture } from '../LearnLeftMenu/LearnLeftMenu.model';
import { LectureNavigationModel } from '../LearnLectureContent/LearnLectureContent.model';

export class CourseModel {
  // leftMenu: CreateLeftMenuModel;
  courseID: number;
  courseTitle: string;
  userId: number;
  lectures: Lecture[];
  createdDate: Date;
  lastUpdatedDate: Date;

  constructor() {
    this.lectures = [];
  }
}
