import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent }    from '../book-list/book-list.component';
import { BookDetailComponent }  from '../book-detail/book-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full'},
    { path: 'books/:id',   component: BookDetailComponent },
    { path: 'books',       component: BookListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
