import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ToolService } from './tool.service';
import { baseApiURL } from '../shared/baseapiurl';
import { Cookies, CookieOptions } from '@cedx/ngx-cookies';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(
    private cookieService: CookieService,
    private cookie: Cookies,
    private toolService: ToolService,
    private http: HttpClient) { }

  setItem(vendor, amount) {
    this.cookie.set(vendor, amount, new CookieOptions({
      path: '/'
   }));
  }

  

  getCartItems(vendorArray): Observable<any> {
    return this.http.post(baseApiURL + "/GetCartItems", vendorArray);
  }

  getAll(): Observable<any> {
    return of(this.cookieService.getAll());
  }

  getKeys():Observable<any> {
    return of(this.cookie.keys);
  }

  getAllCookies(): Observable<any> {
    let all = []
    for (const entry of this.cookie) {
      all.push(entry);
    }
    return of(all);
  }

  removeItem(vendor) {
    this.cookie.remove(vendor);
  }

}
