import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivyangaDarshanComponent } from './divyanga-darshan.component';

describe('DivyangaDarshanComponent', () => {
  let component: DivyangaDarshanComponent;
  let fixture: ComponentFixture<DivyangaDarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivyangaDarshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivyangaDarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
