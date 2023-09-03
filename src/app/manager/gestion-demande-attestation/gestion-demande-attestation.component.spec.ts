import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandeAttestationComponent } from './gestion-demande-attestation.component';

describe('GestionDemandeAttestationComponent', () => {
  let component: GestionDemandeAttestationComponent;
  let fixture: ComponentFixture<GestionDemandeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDemandeAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDemandeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
