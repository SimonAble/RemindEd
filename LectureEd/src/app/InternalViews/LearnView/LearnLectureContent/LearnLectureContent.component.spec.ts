/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearnContentComponent } from './LearnLectureContent.component';

describe('LearnContentComponent', () => {
  let component: LearnContentComponent;
  let fixture: ComponentFixture<LearnContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
