import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule, Routes }     from '@angular/router';

import { HomeComponent }        from '../home/home.component';
import { BookListComponent }        from '../book-list/book-list.component';
//import { BookDetailComponent }      from '../book-detail/book-detail.component';
import { PageNotFoundComponent }    from '../page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '',            redirectTo: '/home', pathMatch: 'full'}, //default path
    { path: 'home',       component: HomeComponent},
//    { path: 'books/:id',   component: BookDetailComponent }, // not sure if going to implement this one
    { path: 'books',       component: BookListComponent }, //books-list path
    { path: '**',          component: PageNotFoundComponent} //page-not-found path
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
