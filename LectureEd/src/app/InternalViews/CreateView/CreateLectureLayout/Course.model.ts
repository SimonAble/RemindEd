import { CreateLeftMenuModel, Lecture } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';

export class CourseModel {
  // leftMenu: CreateLeftMenuModel;

  lectureId: string;
  courseTitle: string;
  lectures: Lecture[];

  constructor() {
    this.lectures = [];
  }
}
