/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LearnLectureContentService } from './LearnLectureContent.service';

describe('Service: LearnLectureContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnLectureContentService]
    });
  });

  it('should ...', inject([LearnLectureContentService], (service: LearnLectureContentService) => {
    expect(service).toBeTruthy();
  }));
});
