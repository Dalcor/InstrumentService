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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAll()
    .subscribe(values => {this.values = values; 
    this.valuesArray = Object.keys(this.values);
    console.log(this.valuesArray);
    this.cartService.getCartItems(this.valuesArray)
    .subscribe(items => this.items = items);
    });
    
  }


}
