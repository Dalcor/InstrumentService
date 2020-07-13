import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/tool.service';
import { baseURL } from '../../shared/baseurl';
import { Params, ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/services/cart.service';
import { Router } from '@angular/router';


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
  categoryTools: any;
  allowedRegExp: RegExp = /^[0-9]+$/;
  allowedCharRegExp: RegExp = /[0-9]/;
  newValue: any;
  amount: number = 1;

  constructor(private toolService: ToolService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getTool(params['tool'],params['detail'], params['vendor'])}))
    .subscribe(item => {this.item = item[0];});
    this.activateRoute.params.pipe(switchMap((params: Params) => {return this.toolService.getCategoryTools(params['tool'],params['detail'])}))
    .subscribe(items => {
      this.categoryTools = items;
    },
    error => {
      this.router.navigate(['/404']);
    });
  }

  removeOne(ev) {
    if(ev.target.nextElementSibling.value > 1) {
      ev.target.nextElementSibling.value -= 1;
      this.amount = ev.target.nextElementSibling.value;
    }
  }

  addOne(ev) {
    if(ev.target.previousElementSibling.value < 999) {
      ev.target.previousElementSibling.value = +ev.target.previousElementSibling.value + 1;
      this.amount = ev.target.previousElementSibling.value;
    }
  }

  onPaste(ev: ClipboardEvent) {
    this.newValue = ev.clipboardData.getData('text');
    console.log(this.newValue);
    if (!this.allowedRegExp.test(this.newValue)) {
      ev.stopPropagation();
      return false;
    } else {
      this.amount = this.newValue;
    }
  }

  onInput(ev) {
    return this.allowedCharRegExp.test(ev.key);
  }

  toCart(vendor, ev) {
    this.amount = ev.target.parentElement.previousElementSibling.querySelectorAll('input')[0].value;
    this.cartService.setItem(vendor, this.amount);
  } 
}
