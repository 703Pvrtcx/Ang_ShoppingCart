import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'
import { CartService } from '../../service/cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClothingService } from '../../service/clothing.service';
import { AuthenticateService } from '../../service/authenticate.service';
import { LoginAuthService } from '../../service/login-auth.service';
import { FormBuilder } from '@angular/forms';

export interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 //---------------------------------------

 //---------------------------------------
  items;
  checkoutForm;
  total: number;
  numitem: number;

  selectedItems = [];
 
  totalq = 0;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
    private firestore: AngularFirestore,
    private cart: CartService,
    private clothing: ClothingService,
    private authService: AuthenticateService,
    private loginService: LoginAuthService
    ) { 
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }
    
  ngOnInit(): void {
    this.firestore.collection<any>("Items").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.items = storeItems;
      console.log(this.items);
   })

   let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.totalq = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
  deleteItem(key){
    this.items =  this.clothing.deleteClothing(key);
    this.firestore.collection<any>("Items").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.items = storeItems;})
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.loginService.logout();
    this.authService.SignOut();
    this.items = this.cartService.clearCart();
    this.firestore.collection<any>("Items").doc("Items").delete();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

  getTotalCost() {
    this.total = 0;
    this.numitem = 0;
    this.items.forEach(item => {
      this.total = this.total + (item.price * 1);  
      this.numitem +=1; 

    });
    return this.total;
  }

}
