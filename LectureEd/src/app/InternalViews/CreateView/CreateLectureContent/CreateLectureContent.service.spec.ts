/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateLectureContentService } from './CreateLectureContent.service';

describe('Service: CreateLectureContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLectureContentService]
    });
  });

  it('should ...', inject([CreateLectureContentService], (service: CreateLectureContentService) => {
    expect(service).toBeTruthy();
  }));
});
