import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(serviceName){
    console.log("print service", serviceName)
    this.router.navigate(['./'+serviceName]);
  }

}
