import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment'

@Injectable()
export class HomeService {

  headerOption:any;
  apiPath= environment.apiRoot;

  headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

  // requestOptions = {
  // headers: new Headers(this.headerDict),
  //   };

  //this.headerOption= new RequestOptions({headers: headers});
  constructor(private http: HttpClient) { }

  getHomeInfo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1' );
  }
}
