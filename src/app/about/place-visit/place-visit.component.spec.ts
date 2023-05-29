import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceVisitComponent } from './place-visit.component';

describe('PlaceVisitComponent', () => {
  let component: PlaceVisitComponent;
  let fixture: ComponentFixture<PlaceVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
