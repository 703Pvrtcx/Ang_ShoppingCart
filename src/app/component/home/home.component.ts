import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';

/*
import { Router, ActivatedRoute } from "@angular/router"
import { UploadService } from "../../service/upload.service";
*/
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { DownloadService } from '../../service/download.service';
import { CartService } from '../../service/cart.service';
import { ClothingService } from '../../service/clothing.service';
import { products } from '../../products';
import { Observable, of } from 'rxjs'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  cart = [];
  items = [];
 

  products = products;
  //items;
  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private cartDao: CartService,
    private clothing: ClothingService,
    private router: Router) 
    { }
    ngOnInit( ): void{
      
     this.firestore.collection<any>("Devices").valueChanges({idField: 'id'}).subscribe(storeItems =>{
        this.items = storeItems;
        console.log(this.items);
     })
   
      this.items = this.cartDao.getProducts();
      this.cart = this.cartDao.getCart();
    }
   
    addToCart(product) {
      this.cartDao.addProduct(product);
    }
   
    openCart() {
      this.router.navigate(['cart']);
    }


    addToCart1(item){
      this.cartDao.addToCart(item);
      this.clothing.addClothing(item);
    }
}

