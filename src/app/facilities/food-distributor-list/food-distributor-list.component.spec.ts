import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDistributorListComponent } from './food-distributor-list.component';

describe('FoodDistributorListComponent', () => {
  let component: FoodDistributorListComponent;
  let fixture: ComponentFixture<FoodDistributorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDistributorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDistributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
