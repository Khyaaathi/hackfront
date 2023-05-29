import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaywiseRitualComponent } from './daywise-ritual.component';

describe('DaywiseRitualComponent', () => {
  let component: DaywiseRitualComponent;
  let fixture: ComponentFixture<DaywiseRitualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaywiseRitualComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DaywiseRitualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
