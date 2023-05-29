import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirScheduleComponent } from './air-schedule.component';

describe('AirScheduleComponent', () => {
  let component: AirScheduleComponent;
  let fixture: ComponentFixture<AirScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
