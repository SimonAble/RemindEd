import { Injectable } from '@angular/core';
import { CreateLeftMenuModel, Lecture } from './CreateLeftMenu.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLeftMenuService {

constructor() { }

public leftMenuItems: CreateLeftMenuModel;

public getCreateLeftMenuItems() {
  let leftMenu = new CreateLeftMenuModel(
    "Mock Course Title",
    [
      new Lecture('Test Lecture 1', true),
      new Lecture('Test Lecture 2', false),
      new Lecture('Test Lecture 3', false)
    ]
  )

  return leftMenu;
}

public saveCreateLeftMenuItems(leftMenuItems: CreateLeftMenuModel) {
  this.leftMenuItems = leftMenuItems
}

}
