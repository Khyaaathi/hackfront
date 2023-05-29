import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLostItemComponent } from './search-lost-item.component';

describe('SearchLostItemComponent', () => {
  let component: SearchLostItemComponent;
  let fixture: ComponentFixture<SearchLostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLostItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
