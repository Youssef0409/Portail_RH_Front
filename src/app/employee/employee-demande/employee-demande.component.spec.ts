import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemandeComponent } from './employee-demande.component';

describe('EmployeeDemandeComponent', () => {
  let component: EmployeeDemandeComponent;
  let fixture: ComponentFixture<EmployeeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
