import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaireInfoComponent } from './salaire-info.component';

describe('SalaireInfoComponent', () => {
  let component: SalaireInfoComponent;
  let fixture: ComponentFixture<SalaireInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaireInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaireInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
