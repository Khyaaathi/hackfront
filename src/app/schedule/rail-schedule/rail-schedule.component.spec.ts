import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailScheduleComponent } from './rail-schedule.component';

describe('RailScheduleComponent', () => {
  let component: RailScheduleComponent;
  let fixture: ComponentFixture<RailScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
