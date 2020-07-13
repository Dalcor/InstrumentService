import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  SLIDERIMAGES = [
    {"media_path": "assets/images/slider-image-3.jpg"},
    {"media_path": "assets/images/slider-image-4.jpg"}
  ];

  constructor() { }

  getSliderImages() {
    return this.SLIDERIMAGES;
  }

  setTemplate(value: boolean): Observable<boolean> {
    return of(value);
  }
}