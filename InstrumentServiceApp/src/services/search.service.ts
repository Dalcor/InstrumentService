import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseApiURL } from '../shared/baseapiurl';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  ititiateSearch(searchRequest) {
    this.http.get( baseApiURL + "/search", searchRequest);
  }

}
