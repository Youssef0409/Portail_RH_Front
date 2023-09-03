import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCongeComponent } from './add-edit-conge.component';

describe('AddEditCongeComponent', () => {
  let component: AddEditCongeComponent;
  let fixture: ComponentFixture<AddEditCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
