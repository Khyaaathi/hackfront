import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDaysComponent } from './special-days.component';

describe('SpecialDaysComponent', () => {
  let component: SpecialDaysComponent;
  let fixture: ComponentFixture<SpecialDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
