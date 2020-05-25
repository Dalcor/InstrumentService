import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/shared/tool';
import { ToolService } from 'src/services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tool: string;
  detail: string;
  categoryTools: any;
  allowedRegExp: RegExp = /^[0-9]+$/;
  allowedCharRegExp: RegExp = /[0-9]/;
  newValue: any;
  names: any;
  filterItems: Array<any>;

  constructor(private toolService: ToolService,
    private activateRoute: ActivatedRoute) {

     }
  id: number;
  p: number = 1;

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getCategoryTools(params['tool'],params['detail'])}))
    .subscribe(items => {
      this.names = items[0];
      this.categoryTools = items;
      console.log(this.names);
      console.log(this.categoryTools.length);
    });
    this.detail = location.href.replace(baseURL, '')
    .split("/")[0].replace(/%20/g, " ");
    this.tool = location.href.replace(baseURL, '')
    .split("/")[1].replace(/%20/g, " ");

    this.filterItems = [
      {
        value: 'Lewis Ltd',
        checked: false
      },
      {
        value: 'Becker-Greene',
        checked: false
      },
      {
        value: 'Luna',
        checked: false
      },
    ];
  }

  

  removeOne(ev) {
    if(ev.target.nextElementSibling.value > 1) {
      ev.target.nextElementSibling.value -= 1;
    }
  }

  addOne(ev) {
    if(ev.target.previousElementSibling.value < 999) {
      ev.target.previousElementSibling.value = +ev.target.previousElementSibling.value + 1;
    }
  }

  onPaste(ev: ClipboardEvent) {
    this.newValue = ev.clipboardData.getData('text');
    console.log(this.newValue);
    if (!this.allowedRegExp.test(this.newValue)) {
      ev.stopPropagation();
      return false;
    }
  }

  onInput(ev) {
    return this.allowedCharRegExp.test(ev.key);
  }

  checked() {
    return this.filterItems.filter(item => { return item.checked; });
  }

  
}
