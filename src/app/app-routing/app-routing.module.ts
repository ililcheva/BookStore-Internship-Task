import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule, Routes }     from '@angular/router';

import { HomeComponent }                  from '../home/home.component';
import { BookDetailComponent }            from '../book-detail/book-detail.component';
import { BookUpdateComponent }            from '../book-update/book-update.component';
import { PageNotFoundComponent }          from '../page-not-found/page-not-found.component';
import { ItemListComponent }               from '../item-list/item-list.component';

const routes: Routes = [
    { path: '',                   redirectTo: '/home', pathMatch: 'full'}, //default path
    { path: 'home',               component: HomeComponent},
    { path: 'books',              component: ItemListComponent}, //books-list path
    { path: 'book/:id',           component: BookDetailComponent }, // book-details path
    { path: 'book/update/:id',    component: BookUpdateComponent },
    { path: 'stores',             component: ItemListComponent },
    { path: 'store/:id',          component: ItemListComponent },
    { path: 'store/:id/book/:id', component: BookDetailComponent },
    { path: 'items',              component: ItemListComponent },
    { path: '**',                 component: PageNotFoundComponent} //page-not-found path
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
