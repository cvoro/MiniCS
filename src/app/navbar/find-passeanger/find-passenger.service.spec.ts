import { TestBed, inject } from '@angular/core/testing';

import { FindPassengerService } from './find-passenger.service';

describe('FindPassengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindPassengerService]
    });
  });

  it('should be created', inject([FindPassengerService], (service: FindPassengerService) => {
    expect(service).toBeTruthy();
  }));
});
