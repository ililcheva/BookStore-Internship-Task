import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book }       from './book';

@Injectable()
export class BookService {
  private host = 'http://milenabooks.azurewebsites.net';
  private booksUrl = 'api/Books';

  constructor(private http: Http) { }

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

}
