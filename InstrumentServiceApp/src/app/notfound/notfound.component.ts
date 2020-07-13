import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor() { }
  background: Array<number> = [1,2,3,4,5,6,7];
  ngOnInit(): void {
    
  }

}
