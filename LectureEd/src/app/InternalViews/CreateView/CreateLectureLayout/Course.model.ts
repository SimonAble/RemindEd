import { CreateLeftMenuModel } from '../CreateLeftMenu/CreateLeftMenu.model';
import { LectureNavigationModel } from '../CreateLectureContent/CreateLectureContent.model';

export class CourseModel {
  leftMenu: CreateLeftMenuModel;

  constructor(leftMenu: CreateLeftMenuModel) {
    this.leftMenu = leftMenu;
  }
}
