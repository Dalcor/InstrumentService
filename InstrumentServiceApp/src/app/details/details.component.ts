import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/shared/tool';
import { ToolService } from 'src/services/tool.service';
import { baseURL } from '../../shared/baseurl';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tool: string;
  detail: string;
  categoryTools: any;
  
  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.detail = window.location.href.replace(baseURL, '')
    .split('/')[0].replace('%20', ' ').replace('-', ' ');
    this.tool = window.location.href.replace(baseURL, '')
    .split('/')[1].replace('%20', ' ').replace('-', ' ');
    this.toolService.getCategoryTools(this.detail, this.tool)
    .subscribe(items => {this.categoryTools = items; console.log(this.categoryTools)});
    
  }


}
