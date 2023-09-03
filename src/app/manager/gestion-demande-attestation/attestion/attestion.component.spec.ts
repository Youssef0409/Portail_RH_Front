import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestionComponent } from './attestion.component';

describe('AttestionComponent', () => {
  let component: AttestionComponent;
  let fixture: ComponentFixture<AttestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
