import { TestBed, inject } from '@angular/core/testing';

import { LeisureConsultantsService } from './leisure-consultants.service';

describe('LeisureConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeisureConsultantsService]
    });
  });

  it('should be created', inject([LeisureConsultantsService], (service: LeisureConsultantsService) => {
    expect(service).toBeTruthy();
  }));
});
