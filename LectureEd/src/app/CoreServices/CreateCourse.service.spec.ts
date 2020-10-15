/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateCourseService } from './CreateCourse.service';

describe('Service: CreateCourse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCourseService]
    });
  });

  it('should ...', inject([CreateCourseService], (service: CreateCourseService) => {
    expect(service).toBeTruthy();
  }));
});
