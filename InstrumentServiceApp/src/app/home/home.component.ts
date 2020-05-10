import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { ToolService } from '../../services/tool.service';
import { Tool } from '../../shared/tool';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
//TODO change types of files
  @Input() tool: Tool;


  catalogItems: any;
  selectedItem = 1;
  selectedItemName: any;
  details: any;
  slides: any;


  catalogConfig = {
    "slidesToShow": 8,
    "slidesToScroll": 4,
    "dots": false,
    "infinite": true
  };

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "prevArrow": false,
    "nextArrow": false,
    "dots": true,
    "infinite": false
  };

  constructor(private sliderService: SliderService,
    private toolService: ToolService) { }

  ngOnInit(): void {
    this.slides = this.sliderService.getSliderImages();

    this.toolService.getTools().subscribe(data => {
      this.catalogItems = data;
      this.selectedItemName = this.catalogItems[0].name;
      console.log(typeof(data));
    });

    this.toolService.getToolDetails().subscribe(data => {
      this.details = data;
    });

   
  }

  onSelect(tool: Tool) {
    this.selectedItem = tool.id;
    this.selectedItemName = tool.name;
    console.log(this.selectedItem);
  }

}
