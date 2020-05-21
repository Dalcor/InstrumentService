import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  constructor(private toolService: ToolService,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getTool(params['tool'],params['detail'], params['vendor'])}))
    .subscribe(item => {this.item = item[0];});
  }

  
}
