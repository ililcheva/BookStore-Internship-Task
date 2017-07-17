import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book }       from './book';

@Injectable()
export class BookService {
  private host = 'http://milenabooks.azurewebsites.net';
  private booksUrl = 'api/Books';
  private headers = new Headers({'Content-Type': 'application/json'});
  private currentBook;

  constructor(
    private http: Http,
    ) { }

   private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

  getBooks(): Promise<Book[]>{
    return this.http.get(`${this.host}/${this.booksUrl}`)
              .toPromise()
              .then(res => {
                //console.log(res.json());
                return res.json() as Book[];
              })
              .catch(this.handleError);
  }

  getBook(id: number): Promise<Book>{
    return this.http.get(`${this.host}/${this.booksUrl}/${id}`)
              .toPromise()
              .then(res =>{
                 //console.log(res.json());
                  return res.json() as Book;
              })
              .catch(this.handleError);
  }

  update(id, book: Book): Promise<Book>{
    return this.http
            .put(`${this.host}/${this.booksUrl}/${book.Id}`, JSON.stringify(book), { headers: this.headers})
            .toPromise()
            .then(() => {
              console.log('*Update method:* //book.service')
              console.log('After:');
              console.log(book);
              return book;
            })
            .catch(this.handleError);
  }

  delete(book: Book): Promise<Book>{
    return this.http
            .delete(`${this.host}/${this.booksUrl}/${book.Id}`, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
  }

}
