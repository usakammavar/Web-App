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

  photos=['../../../assets/portfolio/kamma1.jpg','../../../assets/portfolio/kamma2.jpg',
  '../../../assets/portfolio/kamma3.jpg','../../../assets/portfolio/kamma4.jpg','../../../assets/portfolio/kamma5.jpg']

  pdfList=[
          {'name':'First Magazine','src':'../../../assets/eMag/eMag.pdf'},
          {'name':'October-17 Magazine','src':'../../../assets/eMag/Oct-2018.pdf'},
          {'name':'January-18 Magazine','src':'../../../assets/eMag/Jan-2018.pdf'},
          {'name':'April-18 Magazine','src':'../../../assets/eMag/Apr-2018.pdf'}
          
        ]
  


}
