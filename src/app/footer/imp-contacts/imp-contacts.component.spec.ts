import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpContactsComponent } from './imp-contacts.component';

describe('ImpContactsComponent', () => {
  let component: ImpContactsComponent;
  let fixture: ComponentFixture<ImpContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
