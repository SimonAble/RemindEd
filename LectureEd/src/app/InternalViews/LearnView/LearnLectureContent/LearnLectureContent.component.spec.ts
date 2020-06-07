/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearnLectureContentComponent } from './LearnLectureContent.component';

describe('LearnLectureContentComponent', () => {
  let component: LearnLectureContentComponent;
  let fixture: ComponentFixture<LearnLectureContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnLectureContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnLectureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
