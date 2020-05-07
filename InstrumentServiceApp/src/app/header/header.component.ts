import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.searchForm =  this.fb.group({
      searchvalue: ['', Validators.required]
    });

  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm.value.searchvalue);
  }
}
