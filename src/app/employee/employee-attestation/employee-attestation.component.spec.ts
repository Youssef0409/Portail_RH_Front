import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttestationComponent } from './employee-attestation.component';

describe('EmployeeAttestationComponent', () => {
  let component: EmployeeAttestationComponent;
  let fixture: ComponentFixture<EmployeeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
