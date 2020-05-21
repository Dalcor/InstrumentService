import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/tool.service';
import { baseURL } from '../../shared/baseurl';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  vendor: string;
  tool: string;
  detail: string;
  item: any;

  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.detail = window.location.href.replace(baseURL, '')
    .split('/')[0].replace('%20', ' ').replace('-', ' ');
    this.tool = window.location.href.replace(baseURL, '')
    .split('/')[1].replace('%20', ' ').replace('-', ' ');
    this.vendor = window.location.href.replace(baseURL, '')
    .split('/')[2].replace('%20', ' ').replace('-', ' ');
    this.toolService.getTool(this.detail, this.tool, this.vendor)
    .subscribe(item => {this.item = item; console.log(this.item)});
  }

}
