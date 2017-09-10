import { TestBed, inject } from '@angular/core/testing';

import { CreatePatientService } from './create-patient.service';

describe('CreatePatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatePatientService]
    });
  });

  it('should be created', inject([CreatePatientService], (service: CreatePatientService) => {
    expect(service).toBeTruthy();
  }));
});
