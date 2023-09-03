import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCongeComponent } from './employee-conge.component';

describe('EmployeeCongeComponent', () => {
  let component: EmployeeCongeComponent;
  let fixture: ComponentFixture<EmployeeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
