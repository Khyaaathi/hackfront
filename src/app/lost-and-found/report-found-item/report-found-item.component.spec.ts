import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFoundItemComponent } from './report-found-item.component';

describe('ReportFoundItemComponent', () => {
  let component: ReportFoundItemComponent;
  let fixture: ComponentFixture<ReportFoundItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFoundItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
