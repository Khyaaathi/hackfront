import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorGotoComponent } from './paginator-goto.component';

describe('PaginatorGotoComponent', () => {
  let component: PaginatorGotoComponent;
  let fixture: ComponentFixture<PaginatorGotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorGotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorGotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
