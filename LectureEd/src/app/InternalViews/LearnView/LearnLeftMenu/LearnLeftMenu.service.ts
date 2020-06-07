import { Injectable } from '@angular/core';
import { LearnLeftMenuModel, Lecture } from './LearnLeftMenu.model';

@Injectable({
  providedIn: 'root'
})
export class LearnLeftMenuService {

constructor() { }

public getLearnLeftMenuItems() {
  let leftMenu = new LearnLeftMenuModel(
    "Mock Course Title",
    [
      new Lecture('Test Lecture 1'),
      new Lecture('Test Lecture 2'),
      new Lecture('Test Lecture 3'),
      new Lecture('Test Lecture 4'),
      new Lecture('Test Lecture 5'),
      new Lecture('Test Lecture 6'),
      new Lecture('Test Lecture 7'),
      new Lecture('Test Lecture 8')
    ]
  )

  return leftMenu;
}

}
