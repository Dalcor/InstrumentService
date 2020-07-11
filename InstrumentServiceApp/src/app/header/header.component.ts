import { Component, OnInit, Input, Output, HostListener} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { ToolService } from '../../services/tool.service';
import { Router, RoutesRecognized } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { Cookies } from '@cedx/ngx-cookies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() selectedItem: number;

  searchForm: FormGroup;
  catalogItems: any;
  show: boolean = false;
  details: any;
  cartAmount: number;

  constructor(private fb: FormBuilder,
    private toolService: ToolService,
    private router: Router,
    private cartService: CartService,
    private _cookies: Cookies) {
      this.router.events.subscribe(event => {
        if(event instanceof RoutesRecognized) {
          this.show = false;
        }
      })
    this.createForm();
   }

   createForm() {
    this.searchForm =  this.fb.group({
      searchvalue: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.toolService.getTools().subscribe(data => {
      this.catalogItems = data;
    });
    this.toolService.getToolDetails().subscribe(data => {
      this.details = data;
    });
    this.cartAmount = this.cartService.getCartCount();
    this._cookies.onChanges.subscribe(() => {
      this.cartAmount = this.cartService.getCartCount();
    });
  }

  onSubmit() {
    console.log(this.searchForm.value.searchvalue);
  }

  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }

  mouseEnter(ev) {
    console.log(ev.target);
    ev.target.classList.add("activeLink");
  }

  mouseLeave(ev) {
    ev.target.classList.remove("activeLink");
  }

} 
