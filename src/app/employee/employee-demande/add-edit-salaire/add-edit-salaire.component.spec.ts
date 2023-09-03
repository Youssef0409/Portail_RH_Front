import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalaireComponent } from './add-edit-salaire.component';

describe('AddEditSalaireComponent', () => {
  let component: AddEditSalaireComponent;
  let fixture: ComponentFixture<AddEditSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSalaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
