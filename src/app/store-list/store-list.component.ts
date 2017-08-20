import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Store }              from '../store';
import { StoreService }       from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores: Store[];

  constructor(
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStores();
  }

  getStores(): void{
      this.storeService.getStores()
            .then(stores => this.stores = stores);
  }
  
  goToBooks(storeId: number): void{
    this.router.navigate(['/store', storeId]);
  }

}
