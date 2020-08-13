/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyCoursesAndArticlesComponent } from './MyCoursesAndArticles.component';

describe('MyCoursesAndArticlesComponent', () => {
  let component: MyCoursesAndArticlesComponent;
  let fixture: ComponentFixture<MyCoursesAndArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesAndArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesAndArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
