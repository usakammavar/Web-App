import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  magazines =["eMagazine One","eMagazine Two","eMagazine Three"]

  currentPDF="../../../assets/eMag/Kammavar USA eMag.pdf?#zoom=160&scrollbar=0&toolbar=0&navpanes=0"

  getPDF(input){
    
  }


}
