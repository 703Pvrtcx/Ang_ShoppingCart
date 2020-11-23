import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor() { }

  products = products;

  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
<app-product-alerts
[product] ="product" (notify) = "onNotify()">
</app-product-alerts>
*/