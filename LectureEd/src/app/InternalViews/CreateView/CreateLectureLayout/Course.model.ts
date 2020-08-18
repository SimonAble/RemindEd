import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';

export class CourseModel {
  // leftMenu: CreateLeftMenuModel;
  courseId: number;
  courseTitle: string;
  userId: number;
  lectures: Lecture[];

  constructor() {
    this.lectures = [];
  }
}
