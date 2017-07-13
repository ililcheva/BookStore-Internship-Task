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
  books: Book[];
  selectedBook: Book;

  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  getBooks(): void{
      //magic number
      var relevantBookTitlesCount = 9;
      this.bookService.getBooks()
            .then(books => this.books = books.slice(1, relevantBookTitlesCount));
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

}
