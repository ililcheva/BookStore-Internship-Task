import { BrowserModule }                            from '@angular/platform-browser';
import { NgModule }                                 from '@angular/core';
import { HttpModule }                               from '@angular/http';
import { NgbModule }                                from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

import { AppComponent }                             from './app.component';
import { BookDetailComponent }                      from './book-detail/book-detail.component';

import { BookService }                              from './book.service';
import { StoreService }                             from './store.service';

import { AppRoutingModule }                         from './app-routing/app-routing.module';
import { PageNotFoundComponent }                    from './page-not-found/page-not-found.component';
import { HomeComponent }                            from './home/home.component';
import { BookUpdateComponent }                      from './book-update/book-update.component';
import { ItemListComponent }                        from './item-list/item-list.component';




@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    PageNotFoundComponent,
    HomeComponent,
    BookUpdateComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ BookService, StoreService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
