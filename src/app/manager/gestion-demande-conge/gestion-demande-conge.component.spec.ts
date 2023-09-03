import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandeCongeComponent } from './gestion-demande-conge.component';

describe('GestionDemandeCongeComponent', () => {
  let component: GestionDemandeCongeComponent;
  let fixture: ComponentFixture<GestionDemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDemandeCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
