import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeStandComponent } from './shoe-stand.component';

describe('ShoeStandComponent', () => {
  let component: ShoeStandComponent;
  let fixture: ComponentFixture<ShoeStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoeStandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoeStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
