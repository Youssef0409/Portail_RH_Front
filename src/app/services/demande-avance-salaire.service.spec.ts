import { TestBed } from '@angular/core/testing';

import { DemandeAvanceSalaireService } from './demande-avance-salaire.service';

describe('DemandeAvanceSalaireService', () => {
  let service: DemandeAvanceSalaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeAvanceSalaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
