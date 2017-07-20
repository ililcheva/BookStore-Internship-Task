import { Component, OnInit }       from '@angular/core';
import { ActivatedRoute, ParamMap, Router }       from '@angular/router';
import { Location }                       from '@angular/common';

//switchMap for processing the route parameters from an observable<book> to a book
import 'rxjs/add/operator/switchMap';

import { Book }                           from '../book';
import { BookService }                    from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private book: Book;

  //injecting services that this component requires
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    //getting the id parameter and processing it
    this.route.paramMap
        .switchMap((parameters: ParamMap) => this.bookService.getBook(parseInt(parameters.get('id'),10)))
        //subscribe() wants the book and not the observable
        .subscribe((book) => this.book = book);
  }

  goBack(): void{
    //navigates back to book's list
    this.location.back();
    console.log(this.router.url.split('/'));
  }

  updateBook(id: number): void{
    this.router.navigate(['/book/update', id]);
  }

  delete(book: Book): void{
    this.bookService
        .delete(book)
        .then(() => this.goBack());
  }



}
