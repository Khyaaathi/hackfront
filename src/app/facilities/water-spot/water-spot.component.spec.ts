import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSpotComponent } from './water-spot.component';

describe('WaterSpotComponent', () => {
  let component: WaterSpotComponent;
  let fixture: ComponentFixture<WaterSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterSpotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
