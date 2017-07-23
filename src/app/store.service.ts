import { Injectable }          from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Store }                from './store';
import { Book }                from './book';

@Injectable()
export class StoreService {
  private host = 'http://milenabooks.azurewebsites.net';
  private storesUrl = 'api/Store';

  constructor(
    private http: Http,
  ) { }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }

  getStores(): Promise<Store[]>{
    return this.http.get(`${this.host}/${this.storesUrl}`)
              .toPromise()
              .then(res => {
                // console.log(res.json());
                return res.json() as Store[];
              })
              .catch(this.handleError);
  }
  
  getBooksPerStore(id: number): Promise<Book[]>{
    return this.http.get(`${this.host}/${this.storesUrl.toLowerCase()}/${id}/books`)
              .toPromise()
              .then(res => {
                // console.log(res.json());
                return res.json() as Book[];
              })
              .catch(this.handleError);
  }

  getStore(id: number): Promise<Store>{
    console.log(id);
    return this.http.get(`${this.host}/${this.storesUrl.toLowerCase()}/${id}`)
              .toPromise()
              .then(res => res.json() as Store)
              .catch(this.handleError);
  }

}
