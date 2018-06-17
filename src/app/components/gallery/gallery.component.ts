import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  photos=['../../../assets/portfolio/kamma1.jpg','../../../assets/portfolio/kamma2.jpg',
  '../../../assets/portfolio/kamma3.jpg','../../../assets/portfolio/kamma4.jpg','../../../assets/portfolio/kamma5.jpg']

}
