import { Component, OnInit } from '@angular/core';

import { Book }              from '../book';
import { BookService }       from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  getBooks(): void{
    //magic number
    var relevantBooksCount = 9;
    this.bookService.getBooks()
          .then(books => this.books = books.slice(1, relevantBooksCount));
  }

  ngOnInit(): void {
    this.getBooks();
  }

}
