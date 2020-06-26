import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/shared/tool';
import { ToolService } from 'src/services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CartService } from 'src/services/cart.service';

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
  filterItems: Array<any>;

  values: any;
  valuesArray: Array<any>;
  items: any;
  keyValueArray: any;


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
      console.log(this.categoryTools.InstrumentCatalog);
    });
    this.toolService.GetFilterTags().subscribe(
      data => {this.filterItems = Object.values(data);
      console.log(this.filterItems)});  
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
    // this.newValue = ev.clipboardData.getData('text');
    // console.log(this.newValue);
    // if (!this.allowedRegExp.test(this.newValue)) {
      ev.stopPropagation();
      return false;
    // }
  }

  onInput(ev) {
    // return this.allowedCharRegExp.test(ev.key);
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

  // focusOut(ev, vendor) {
  //   this.cartService.getAll()
  //   .subscribe(values => {this.values = values; 
  //   this.valuesArray = Object.keys(this.values);
  //   this.cartService.getCartItems(this.valuesArray)
  //   .subscribe(items => {this.items = items;
  //         for(let item in items) {
  //             if(items[item].vendor_code === vendor && +ev.target.value > items[item].amount) {
  //                 ev.target.value = items[item].amount;
  //             }
  //         }
  //         if(ev.target.value == 0) {
  //           ev.target.value = 1;
  //         }
  //   });

  //   });

  // }
  focusOut(event, vendor) {

  }
}
