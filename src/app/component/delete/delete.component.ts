import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() item;
  @Input() items;
  constructor(private route: ActivatedRoute,private router: Router, private cartservice: CartService) { }
  
  deleteItem(item){
     //this.items = this.cartservice.deleteItem(item);
     this.items = this.cartservice.items.splice(item,0);

     ///this.cartservice.items  = this.items;
     //this.items  = this.cartservice.getItems();
      window.alert('Your ' +  this.item  +' has been deleted from the cart!');
      this.router.navigateByUrl('cart');
    }
  ngOnInit() {
      this.items = this.cartservice.getItems();
      window.alert(this.item);
    }
  }


