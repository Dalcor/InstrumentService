import { Component, OnInit, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { ToolService } from '../../services/tool.service';
import { Tool } from '../../shared/tool';

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

  constructor(private fb: FormBuilder,
    private toolService: ToolService) {
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
  }

  onSubmit() {
    console.log(this.searchForm.value.searchvalue);
  }

  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }

  scroll() {
    document.querySelector('#catalog').scrollIntoView({
      behavior: "smooth"
    });

  }

} 
