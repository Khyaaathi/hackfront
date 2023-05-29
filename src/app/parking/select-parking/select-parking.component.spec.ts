import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectParkingComponent } from './select-parking.component';

describe('SelectParkingComponent', () => {
  let component: SelectParkingComponent;
  let fixture: ComponentFixture<SelectParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
