import { Component, OnInit, Input }                         from '@angular/core';
import { Router}            from '@angular/router';

import { Book }              from '../book';
import { BookService }       from '../book.service';
import { Store }             from '../store';
import { StoreService }       from '../store.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  
  @Input() 
  set onSelectedStore(_selectedStore: Store){
    this.selectedStore = _selectedStore;
    // console.log('setter', this.selectedStore);
    if(this.selectedStore){
      this.getItems();
    }
  } 
  
 
  selectedStore: Store;
  currentPage = 1;
  items: any[];
  size: number;
  itemsPerPage: any[];
  itemsPerPageCount: number = 8;
  top: number;
  skip: number = 0;
  displayedStore: Store;


  url: string[] = this.router.url.split('/');
  listCollectionUrl = this.url[1];

  constructor(
    private bookService: BookService,
    private storeService: StoreService,
    private router: Router
    ) {
     }

  getItems(): void{
    let promise: Promise<any[]>;
      if(this.selectedStore){
        // console.log('if');
        promise = this.storeService.getBooksPerStore(this.selectedStore.Id);
      }
      else{
        // console.log('else');
        switch(this.listCollectionUrl){
          case 'books':
            promise = this.bookService.getBooks();
            break;
          case 'stores':
            promise = this.storeService.getStores();
            break;
          case 'store':
            const currentStoreId = +this.url[2];
            promise = this.storeService.getBooksPerStore(currentStoreId);
            break;
        }
      }
      promise.then(items => {
              this.top = this.itemsPerPageCount;
              this.items = items;
              this.itemsPerPage = this.items.slice(this.skip, this.itemsPerPageCount);
              this.size = items.length;
      });
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.getItems();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  goToDetail(id: number): void{
    const detailCollectionUrl = this.url[1].slice(0,-1);
    let navigateToUrl = '';
    switch(this.listCollectionUrl){
      case (this.listCollectionUrl ==='books'? 'books': 'stores'):
        navigateToUrl = `${detailCollectionUrl}`;
        break;
      case 'store':
        const storeId = +this.url[2];
        navigateToUrl = `${this.listCollectionUrl}/${storeId}/book`;
        break;
    }
    this.router.navigate([navigateToUrl, id]);
  }

  changePage(page: number): any{
    page === 1? this.skip = 0: this.skip = this.itemsPerPageCount * (page - 1);
    this.itemsPerPage = this.items.slice(this.skip, this.skip + this.top);
  }


}
