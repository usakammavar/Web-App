import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-matrimonal',
  templateUrl: './matrimonal.component.html',
  styleUrls: ['./matrimonal.component.css']
})
export class MatrimonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public brides=[1,2,3,4,5,6,7,8,9]

  public showAddForm:boolean =false;
  postBride(){
    if(this.showAddForm){
       this.showAddForm=false;
    }else{
       this.showAddForm = true;
    }
    
  }
}
