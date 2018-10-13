import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment'

@Injectable()
export class HomeService {


  options
  constructor(private http: Http) { 
    let headers =new Headers({'Content-Type': 'application/json','Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: headers})
  }


}
