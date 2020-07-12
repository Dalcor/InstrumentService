import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/shared/tool';
import { ToolService } from 'src/services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap, throttleTime } from 'rxjs/operators';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CartService } from 'src/services/cart.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tool: string;
  detail: string;
  categoryTools: any;
  amount: number;
  allowedRegExp: RegExp = /^[0-9]+$/;
  allowedCharRegExp: RegExp = /[0-9]/;
  newValue: any;
  names: any;
  filterItems: any;

  values: any;
  valuesArray: Array<any>;
  items: any;
  keyValueArray: any;

  minValue: number = 50;
  maxValue: number = 700;
  options: Options = {
    floor: 0,
    ceil: 1000
  }

  constructor(private toolService: ToolService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService) {

     }
  id: number;
  p: number = 1;

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getCategoryTools(params['tool'],params['detail'])}))
    .subscribe(items => {
      this.categoryTools = items;
      this.filterItems = Object.values(this.categoryTools.Companys);
    });
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
      ev.stopPropagation();
      return false;
  }

  onInput(ev) {
    ev.stopPropagation();
    return false;
  }

  checked() {
    return this.filterItems.filter(item => { return item.checked; });
  }

  toCart(ev, vendor) {
    this.amount = ev.target.parentElement.previousElementSibling.querySelectorAll('input')[0].value;
    this.cartService.setItem(vendor, this.amount);
  }

  onFilterChanged() {
    this.p = 1;
  }
}
