import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute, private cartservice: CartService) { }

    addToCart(product){
    this.cartservice.addToCart(product);
    window.alert('Your ' + product.name + ' has been added to the cart!');
    }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.product = products[+params.get('productId')];
    })
  }

}
