import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSosComponent } from './report-sos.component';

describe('ReportSosComponent', () => {
  let component: ReportSosComponent;
  let fixture: ComponentFixture<ReportSosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
