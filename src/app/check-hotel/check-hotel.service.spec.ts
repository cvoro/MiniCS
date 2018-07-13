import { TestBed, inject } from '@angular/core/testing';

import { CheckHotelService } from './check-hotel.service';

describe('CheckHotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckHotelService]
    });
  });

  it('should be created', inject([CheckHotelService], (service: CheckHotelService) => {
    expect(service).toBeTruthy();
  }));
});
