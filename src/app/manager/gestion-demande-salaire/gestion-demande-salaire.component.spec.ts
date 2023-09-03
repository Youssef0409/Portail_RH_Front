import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandeSalaireComponent } from './gestion-demande-salaire.component';

describe('GestionDemandeSalaireComponent', () => {
  let component: GestionDemandeSalaireComponent;
  let fixture: ComponentFixture<GestionDemandeSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDemandeSalaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDemandeSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
