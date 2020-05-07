import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'ngSlick';

  slides;

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "prev": false,
    "next": false,
    "dots": true,
    "infinite": false
  };

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.slides = this.sliderService.getSliderImages();
  }

}
