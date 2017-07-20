import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule, Routes }     from '@angular/router';

import { HomeComponent }                  from '../home/home.component';
import { BookListComponent }              from '../book-list/book-list.component';
import { BookDetailComponent }            from '../book-detail/book-detail.component';
import { BookUpdateComponent }            from '../book-update/book-update.component';
import { PageNotFoundComponent }          from '../page-not-found/page-not-found.component';
import { StoreListComponent }             from '../store-list/store-list.component';
import { BooksPerStoreListComponent}      from '../books-per-store-list/books-per-store-list.component';

const routes: Routes = [
    { path: '',                   redirectTo: '/home', pathMatch: 'full'}, //default path
    { path: 'home',               component: HomeComponent},
    { path: 'books',              component: BookListComponent }, //books-list path
    { path: 'books/:id',          component: BookDetailComponent }, // book-details path
    { path: 'books/update/:id',   component: BookUpdateComponent },
    { path: 'stores',             component: StoreListComponent },
    { path: 'store/:id',          component: BooksPerStoreListComponent },
    { path: '**',                 component: PageNotFoundComponent} //page-not-found path
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
