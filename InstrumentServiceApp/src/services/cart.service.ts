import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ToolService } from './tool.service';
import { baseApiURL } from '../shared/baseapiurl';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private cookieService: CookieService,
    private toolService: ToolService,
    private http: HttpClient) { }

  setItem(vendor, amount) {
    this.cookieService.set(vendor, amount);
  }

  getCartItems(vendorArray): Observable<any> {
    return this.http.post(baseApiURL + "/GetCartItems", vendorArray);
  }

  getAll(): Observable<any> {
    return of(this.cookieService.getAll());
  }
}
