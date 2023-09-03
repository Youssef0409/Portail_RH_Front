import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMesdemandesComponent } from './employee-mesdemandes.component';

describe('EmployeeMesdemandesComponent', () => {
  let component: EmployeeMesdemandesComponent;
  let fixture: ComponentFixture<EmployeeMesdemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMesdemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMesdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
