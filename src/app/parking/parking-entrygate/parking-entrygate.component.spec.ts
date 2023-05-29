import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingEntrygateComponent } from './parking-entrygate.component';

describe('ParkingEntrygateComponent', () => {
  let component: ParkingEntrygateComponent;
  let fixture: ComponentFixture<ParkingEntrygateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingEntrygateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingEntrygateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
