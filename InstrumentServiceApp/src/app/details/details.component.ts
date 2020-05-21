import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/shared/tool';
import { ToolService } from 'src/services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tool: string;
  detail: string;
  categoryTools: any;

  constructor(private toolService: ToolService,
    private activateRoute: ActivatedRoute) {
     }
  id: number;

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getCategoryTools(params['tool'],params['detail'])}))
    .subscribe(items => {this.categoryTools = items;});
  }

  removeOne(ev) {
    console.log(ev.target.nextElementSibling);
    if(ev.target.nextElementSibling.value > 1) {
      ev.target.nextElementSibling.value -= 1;
    }
  }

  addOne(ev) {
    console.log(ev.target.previousElementSibling);
    if(ev.target.previousElementSibling.value < 100) {
      ev.target.previousElementSibling.value = +ev.target.previousElementSibling.value + 1;
    }
  }

  
}
