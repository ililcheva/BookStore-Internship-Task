import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByStoreFilterComponent } from './books-by-store-filter.component';

describe('BooksByStoreFilterComponent', () => {
  let component: BooksByStoreFilterComponent;
  let fixture: ComponentFixture<BooksByStoreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByStoreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByStoreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
