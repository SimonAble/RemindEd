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

  constructor() {
    this.lectures = [];
  }
}
