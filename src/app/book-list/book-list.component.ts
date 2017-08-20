import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Book }              from '../book';
import { BookService }       from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  currentPage = 1;
  books: Book[];
  selectedBook: Book;
  size: number;
  booksPerPage: Book[];
  booksPerPageCount: number = 8;
  //
  top: number;
  skip: number = 0;
  //page 1
  //1-10

  constructor(
    private bookService: BookService,
    private router: Router,
    ) { 
    }

  getBooks(): void{
      //magic number
      var relevantBookTitlesCount = 9;
      this.bookService.getBooks()
            .then(books => {
              this.top = this.booksPerPageCount;
              this.books = books;
              this.booksPerPage = this.books.slice(this.skip, this.booksPerPageCount);
              this.size = books.length;
            }
            );
  }

  getBook(id: number): void{
    this.bookService.getBook(id)
        .then(book => this.selectedBook);
        
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void{
    this.selectedBook = book;
  }

  goToDetail(id: number): void{
    this.router.navigate(['book', id]);
  }

  changePage(page: number): any{
    if(page === 1){
      this.skip = 0;
    }
    else{
      this.skip = this.booksPerPageCount * (page - 1);
    }
    this.booksPerPage = this.books.slice(this.skip, this.skip + this.top);
    // console.log(this.booksPerPage);
    // console.log(this.books);
    console.log(this.router.url);
  }

}
