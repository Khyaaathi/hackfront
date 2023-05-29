import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelChairComponent } from './wheel-chair.component';

describe('WheelChairComponent', () => {
  let component: WheelChairComponent;
  let fixture: ComponentFixture<WheelChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelChairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
