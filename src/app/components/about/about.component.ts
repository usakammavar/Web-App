import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  showSpinner:boolean = false
  ngOnInit() {
    this.showSpinner=true;
        setTimeout(()=>{
          this.showSpinner =false;
        },2000)
  }
}



