import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanthaNiwasComponent } from './pantha-niwas.component';

describe('PanthaNiwasComponent', () => {
  let component: PanthaNiwasComponent;
  let fixture: ComponentFixture<PanthaNiwasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanthaNiwasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanthaNiwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
