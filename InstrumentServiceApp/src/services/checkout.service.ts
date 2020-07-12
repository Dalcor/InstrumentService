import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckoutInfo } from 'src/shared/checkoutinfo';
import { baseApiURL } from '../shared/baseapiurl';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient,
    private cartService: CartService) { }
  order = {
    'checkout': 
    {
      'firstName': "",
      'lastName': "",
      'telnum': 0,
      "email": ""
    },
    'cart': {}
  }
  
  submitCheckout(checkoutInfo: CheckoutInfo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    this.order.checkout = checkoutInfo;
    this.cartService.getAll().subscribe(items => this.order.cart = items);
    return this.http.post(baseApiURL + '/order', this.order, httpOptions);
  }
}
