import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  first_url = 'https://www.youtube.com/embed/STzX5I9KHDE';
  second_url = 'https://www.youtube.com/embed/2f5KNdFnvoA';
  third_url = 'https://www.youtube.com/embed/MOPJiAPNaI';
  fourth_url= 'https://www.youtube.com/embed/dRXtnD9dLzo';
  fifth_url= 'https://www.youtube.com/embed/F3iRZipAqw8';
  current_url: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
  }

  updateSrc(url) {
    this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  ngOnInit() {
    this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.first_url)
  }

}
