import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaktaNiwasComponent } from './bhakta-niwas.component';

describe('BhaktaNiwasComponent', () => {
  let component: BhaktaNiwasComponent;
  let fixture: ComponentFixture<BhaktaNiwasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhaktaNiwasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhaktaNiwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
