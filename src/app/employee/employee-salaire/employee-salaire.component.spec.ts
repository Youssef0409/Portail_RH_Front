import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaireComponent } from './employee-salaire.component';

describe('EmployeeSalaireComponent', () => {
  let component: EmployeeSalaireComponent;
  let fixture: ComponentFixture<EmployeeSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSalaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
