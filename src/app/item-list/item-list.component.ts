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
  set onSelectedStore(_selectedStore: number){
    this.selectedStore = _selectedStore;
    console.log('setter', this.selectedStore);
    this.getItems();
    this.getStore(this.selectedStore);
  } 
  // get selectedStore(): number{
  //   return this._selectedStore;
  // }
  
 
  selectedStore: number;
  currentPage = 1;
  books: Book[];
  stores: Store[];
  items: any[];
  selectedBook: Book;
  size: number;
  itemsPerPage: any[];
  itemsPerPageCount: number = 8;
  top: number;
  skip: number = 0;
  displayedStore: Store;


  url: string[] = this.router.url.split('/');

  constructor(
    private bookService: BookService,
    private storeService: StoreService,
    private router: Router
    ) {
     }

  getItems(): void{
    let promise: Promise<any[]>;
      if(this.selectedStore){
        console.log('if');
        promise = this.storeService.getBooksPerStore(this.selectedStore);
      }
      else{
        console.log('else');
        if(this.url[1] === 'books'){
        promise = this.bookService.getBooks();
        }
        else if(this.url[1] === 'stores'){
          promise = this.storeService.getStores();
        }
        else if(this.url[1] === 'store'){
          promise = this.storeService.getBooksPerStore(+this.url[2]);
        }
        else{
          //should not happen
        }
      }
      promise.then(items => {
              this.top = this.itemsPerPageCount;
              this.items = items;
              this.itemsPerPage = this.items.slice(this.skip, this.itemsPerPageCount);
              this.size = items.length;
      });
  }

  getBook(id: number): void{
    this.bookService.getBook(id)
        .then(book => this.selectedBook);
        
  }

  getStore(id: number): void{
    this.storeService.getStore(id)
      .then(store => this.displayedStore = store);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getItems();
  }


  // onSelect(book: Book): void{
  //   this.selectedBook = book;
  // }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  goToDetail(id: number): void{
    const detailCollectionUrl = this.url[1].slice(0,-1);
    const detailChildCollectionUrl = this.url[1];
    if(this.url[1] === 'books'){
      this.router.navigate([`${detailCollectionUrl}`, id]);
    }
    else if(this.url[1] === 'stores'){
      this.router.navigate([`${detailCollectionUrl}`, id]);
    }
    else if(this.url[1] === 'store'){
      const storeId = this.url[2];
      //console.log(storeId);
      this.router.navigate([`${detailChildCollectionUrl}/${+storeId}/book`, id]);
    }
  }

  changePage(page: number): any{
    if(page === 1){
      this.skip = 0;
    }
    else{
      this.skip = this.itemsPerPageCount * (page - 1);
    }
    this.itemsPerPage = this.items.slice(this.skip, this.skip + this.top);
    // console.log(this.booksPerPage);
    // console.log(this.books);
  }


}
