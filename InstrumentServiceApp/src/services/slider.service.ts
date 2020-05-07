import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  SLIDERIMAGES = [
    {"media_path": "../../assets/images/slider-img-1.jpeg"},
    {"media_path": "../../assets/images/slider-img-2.jpg"}
  ];

  constructor() { }

  getSliderImages() {
    return this.SLIDERIMAGES;
  }
}