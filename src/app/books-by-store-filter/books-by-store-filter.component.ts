import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Store }             from '../store';
import { StoreService }       from '../store.service';

@Component({
  selector: 'app-books-by-store-filter',
  templateUrl: './books-by-store-filter.component.html',
  styleUrls: ['./books-by-store-filter.component.css']
})
export class BooksByStoreFilterComponent implements OnInit {

  @Output() onBooksRequest = new EventEmitter<number>();
  
  stores: Store[];
  selectedStore: Store;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.getStores();
  }

  getStores(): void{
    this.storeService.getStores()
      .then(stores => this.stores = stores);
  }

  getBooksPerStore(id: number){
    this.onBooksRequest.emit(id);
    this.selectedStore = this.stores.find(store => store.Id === id);
  }
}
