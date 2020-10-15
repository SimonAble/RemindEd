/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LearnLeftMenuService } from './LearnLeftMenu.service';

describe('Service: LearnLeftMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnLeftMenuService]
    });
  });

  it('should ...', inject([LearnLeftMenuService], (service: LearnLeftMenuService) => {
    expect(service).toBeTruthy();
  }));
});
