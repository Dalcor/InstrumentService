import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  values: any;
  valuesArray: Array<any>;
  items: any;
  keyValueArray: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAll()
    .subscribe(values => {this.values = values; 
    this.valuesArray = Object.keys(this.values);
    this.keyValueArray = Object.entries(this.values);
    console.log(this.valuesArray);
    this.cartService.getCartItems(this.valuesArray)
    .subscribe(items => {this.items = items;
    console.log(items)});
    });
  }

  removeFromCart(item) {
    this.cartService.removeItem(item);
  }


}
