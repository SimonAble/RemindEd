/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateLeftMenuService } from './CreateLeftMenu.service';

describe('Service: CreateLeftMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLeftMenuService]
    });
  });

  it('should ...', inject([CreateLeftMenuService], (service: CreateLeftMenuService) => {
    expect(service).toBeTruthy();
  }));
});
