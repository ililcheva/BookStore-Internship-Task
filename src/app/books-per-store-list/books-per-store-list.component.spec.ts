import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPerStoreListComponent } from './books-per-store-list.component';

describe('BooksPerStoreListComponent', () => {
  let component: BooksPerStoreListComponent;
  let fixture: ComponentFixture<BooksPerStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPerStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPerStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
