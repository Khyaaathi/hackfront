import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimewiseRitualComponent } from './timewise-ritual.component';

describe('TimewiseRitualComponent', () => {
  let component: TimewiseRitualComponent;
  let fixture: ComponentFixture<TimewiseRitualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimewiseRitualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimewiseRitualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
