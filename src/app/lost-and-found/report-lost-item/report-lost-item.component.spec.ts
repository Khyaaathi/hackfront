import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLostItemComponent } from './report-lost-item.component';

describe('ReportLostItemComponent', () => {
  let component: ReportLostItemComponent;
  let fixture: ComponentFixture<ReportLostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLostItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportLostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
