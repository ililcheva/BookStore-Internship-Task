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
  //page 1
  //1-10

  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  getBooks(): void{
      //magic number
      var relevantBookTitlesCount = 9;
      this.bookService.getBooks()
            .then(books => {
              this.books = books;
              this.booksPerPage = this.books.slice(0, 8);
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
    this.router.navigate(['/books', id]);
  }

  changePage(page: number): any{
    if(page === 1){
      this.booksPerPage = this.books.slice(0, 10 - 2);
    }
    else{
      this.booksPerPage = this.books.slice((page - 1) * 10 - 2, (page - 1) * 10 + 6);
    }
    console.log(this.booksPerPage);
    console.log(this.books);
  }

}
