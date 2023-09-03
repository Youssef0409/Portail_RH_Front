import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAttestationComponent } from './add-edit-attestation.component';

describe('AddEditAttestationComponent', () => {
  let component: AddEditAttestationComponent;
  let fixture: ComponentFixture<AddEditAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
