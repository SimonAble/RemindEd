/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearningModuleModalComponent } from './LearningModuleModal.component';

describe('LearningModuleModalComponent', () => {
  let component: LearningModuleModalComponent;
  let fixture: ComponentFixture<LearningModuleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningModuleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningModuleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
