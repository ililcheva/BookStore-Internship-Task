import { Component, OnInit, Input }                    from '@angular/core';
import { ActivatedRoute, ParamMap, Router }            from '@angular/router';
import { Location }                                    from '@angular/common';
import { FormBuilder, FormGroup, Validators }          from '@angular/forms';
import 'rxjs/add/operator/switchMap';


import { Book }                                        from '../book';
import { BookService }                                 from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  @Input() book: Book;
  private selectedBook: Book;
  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 

    this.bookForm = this.fb.group({
      name: ['',  Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s\'\".-]*$/)])],
      author: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s.-]*$/)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500) ])],
      price: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/)])],
      rating: ['', Validators.compose([Validators.pattern(/^[1-5]{1}$/)])],
      pictureUrl: ['', ],
    })
  }

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
  }

  save(id: number): void{
    //save changes
    console.log('*Save method:* //book-detail.component');
    this.bookService.update(id, this.book)
        .then(() => this.goBack());
  }

  create(book): void{
    this.bookService.create(this.book)
        .then(() => {
          console.log('Book =', book);
          this.goBack();
        });
  }
}
