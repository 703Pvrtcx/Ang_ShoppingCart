import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "../../service/authenticate.service";
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hidden = false;
  showFiller = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  cart = [];
  items = [];
  constructor(private auth: AuthenticateService, private router: Router, private cartDao: CartService,) { }

 ngOnInit( ): void{
     this.items = this.cartDao.getProducts();
     this.cart = this.cartDao.getCart();
   }
  
   addToCart(product) {
     this.cartDao.addProduct(product);
   }
  
   openCart() {
     this.router.navigate(['cart']);
   }
   addItem() {
    this.router.navigate(['about']);
  }
  openLogin() {
    this.router.navigate(['sign-in']);
  }
  
   
}
