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
  totalPrice: number;
  keyValueArray: any;
  amount: number;
  allowedRegExp: RegExp = /^[0-9]+$/;
  allowedCharRegExp: RegExp = /[0-9]/;
  newValue: any;
  test: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.setCart();
  }

  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.setCart();
  };

  setCart() {
    this.cartService.getAll()
    .subscribe(values => {this.values = values; 
    this.valuesArray = Object.keys(this.values);
    this.keyValueArray = Object.entries(this.values);
    this.cartService.getCartItems(this.valuesArray)
    .subscribe(items => {this.items = items;
      this.totalPrice = 0;
      for(let value in this.values) {
        for(let item in items) {
          if(items[item].vendor_code === value) {
            this.totalPrice += items[item].price*values[value];
          }
        }
      }
      });
    });
    
  }


  removeOne(ev, vendor) {
    if(ev.target.nextElementSibling.value > 1) {
      ev.target.nextElementSibling.value -= 1;
    }
    this.cartService.setItem(vendor, ev.target.nextElementSibling.value);
    this.setCart();
  }

  addOne(ev, vendor) {
    
    this.cartService.getAll()
    .subscribe(values => {this.values = values; 
    this.valuesArray = Object.keys(this.values);
    this.cartService.getCartItems(this.valuesArray)
    .subscribe(items => {this.items = items;
          for(let item in items) {
              if(items[item].vendor_code === vendor && +ev.target.previousElementSibling.value < items[item].amount) {
                ev.target.previousElementSibling.value = +ev.target.previousElementSibling.value + 1;
              }   
          }
          if(ev.target.value == 0) {
            ev.target.value = 1;
          }
          this.cartService.setItem(vendor, ev.target.previousElementSibling.value);
          this.setCart();
    });

    });
  }

  onPaste(ev: ClipboardEvent, vendor) {
    // this.newValue = ev.clipboardData.getData('text');
    // if (!this.allowedRegExp.test(this.newValue)) {
      ev.stopPropagation();
      return false;
    // }
    // this.cartService.getAll()
    // .subscribe(values => {this.values = values; 
    // this.valuesArray = Object.keys(this.values);
    // this.cartService.getCartItems(this.valuesArray)
    // .subscribe(items => {this.items = items;
    //       for(let item in items) {
    //           if(items[item].vendor_code === vendor && +this.newValue > items[item].amount) {
    //             ev.stopPropagation();
    //             return false;
    //           }
    //       }
    //       if(this.newValue == 0) {
    //         ev.stopPropagation();
    //         return false;
    //       }

    //       this.cartService.setItem(vendor, this.newValue);
    //       this.setCart();
    // });

    // });
  }

  onInputValidation(ev) {
    return this.allowedCharRegExp.test(ev.key);    
  }

  focusOut(ev, vendor) {
    this.cartService.getAll()
    .subscribe(values => {this.values = values; 
    this.valuesArray = Object.keys(this.values);
    this.cartService.getCartItems(this.valuesArray)
    .subscribe(items => {this.items = items;
          for(let item in items) {
              if(items[item].vendor_code === vendor && +ev.target.value > items[item].amount) {
                  ev.target.value = items[item].amount;
              }
          }
          if(ev.target.value == 0) {
            ev.target.value = 1;
          }
          this.cartService.setItem(vendor, ev.target.value);
          this.setCart();
    });

    });

  }
}
