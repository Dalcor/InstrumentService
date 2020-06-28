import { Component, OnInit, Input, Output, HostListener} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { ToolService } from '../../services/tool.service';
import { Router, RoutesRecognized } from '@angular/router';

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

  constructor(private fb: FormBuilder,
    private toolService: ToolService,
    private router: Router) {
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
  }

  onSubmit() {
    console.log(this.searchForm.value.searchvalue);
  }

  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }

  
  

  @HostListener('hashchange') hideCatalog() {
    
  }

} 
