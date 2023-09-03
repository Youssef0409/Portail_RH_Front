import { TestBed } from '@angular/core/testing';

import { DemandeAttestationService } from './demande-attestation.service';

describe('DemandeAttestationService', () => {
  let service: DemandeAttestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeAttestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
