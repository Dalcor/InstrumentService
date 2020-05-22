import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { ToolService } from '../../services/tool.service';
import { Tool } from '../../shared/tool';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  @Input() tool: Tool;
 
  selectedItem: number; 
  catalogItems: any;
  selectedItemName: any;
  details: any;
  slides: any;


  catalogConfig = {
    "slidesToShow": 8,
    "slidesToScroll": 8,
    "dots": false,
    "infinite": false
  };

  constructor(private sliderService: SliderService,
    private toolService: ToolService) { }

  ngOnInit(): void {
    this.toolService.getTools().subscribe(data => {
      this.catalogItems = data;
      this.selectedItem = this.catalogItems[0].id;
      this.selectedItemName = this.catalogItems[0].name.replace(' ', '-');
    });

    this.toolService.getToolDetails().subscribe(data => {
      this.details = data;
    }); 
  }



  onSelect(tool: Tool, ev) {
    let allItems = document.getElementsByClassName('item');
    Array.prototype.forEach.call(allItems, function(item, index){
      item.classList.remove('active');
    });
    ev.target.classList.add('active');
    this.selectedItem = tool.id;
    this.selectedItemName = tool.name;
  }
}

