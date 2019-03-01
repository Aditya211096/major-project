import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

flag:number;

show(obj:number) {
  this.flag = obj;
}
  
  constructor() { 
    
   }

  ngOnInit() {
  }

}

