import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { CheckoutInfo } from '../../shared/checkoutinfo';
import { CheckoutService } from 'src/services/checkout.service';
import { Order } from 'src/shared/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  values: any;
  valuesArray: Array<any>;
  items: any;
  totalPrice: number;
  keyValueArray: any;
  amount: number;
  allowedRegExp: RegExp = /^[0-9]+$/;
  allowedCharRegExp: RegExp = /[0-9]/;
  newValue: any;
  checkoutForm: FormGroup;
  checkoutInfo: CheckoutInfo;
  submitted = false;


  constructor(private cartService: CartService,
    private checkoutService: CheckoutService,
    private fb: FormBuilder){}
  

  ngOnInit(): void {
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
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  get f() { return this.checkoutForm.controls; }

  

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
       return;
    }
    this.checkoutInfo = this.checkoutForm.value;
    this.checkoutService.submitCheckout(this.checkoutInfo)
    .subscribe();

    this.checkoutForm.reset({
      firstName: '',
      lastName: '',
      telnum: '',
      email: ''
    });
    this.submitted = false
  }

}
