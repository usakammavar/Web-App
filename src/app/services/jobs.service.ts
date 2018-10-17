import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment'

@Injectable()
export class JobsService {

  apiPath ='https://kammavarsangam.org/';
  options;
  headers;
  constructor(private http: Http) { 
    this.headers =new Headers({'Content-Type': 'application/json',"Authorization": "",
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: this.headers})
  }

  getJobsList(): Observable<any> {
    // let response=this.http.get('http://kammavar.gear.host/api/Job').map(this.jobs);
    // console.log("get home response", response)
    // return response
    return this.http.get('https://kammavarsangam.org/api/Job', this.options)
  }


  postJob(data:any): Observable<any> {
    data.postedBy="102";
    return this.http.post('https://kammavarsangam.org/api/Job', data, this.options)
  }

  getJobDetail(id): Observable<any> {
    return this.http.get('https://kammavarsangam.org/api/Job/'+id, this.options)
  }

  private jobs(res: Response) {
    let job = res.json();
    return job || { };
  }

  getFinanceList(): Observable<any> {
    return this.http.get('https://kammavarsangam.org/api/Finance', this.options)
  }

  postFinance(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/Finance', data, this.options)
  }

  login(data): Observable<any> {
    this.headers =new Headers({'Content-Type': 'application/json',"Authorization":"Basic "+data,
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: this.headers})
    return this.http.get('https://kammavarsangam.org/api/Login', this.options)
  }

  register(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/Register',data, this.options)
  }

  postContactForm(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/Job', data, this.options)
  }

  forgetPassword(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/Login/ForgotPassword', data, this.options)
  }

  changePassword(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/ChangePassword', data, this.options)
  }

  contactUs(data): Observable<any> {
    console.log("Contact US", data)
    return this.http.post('https://kammavarsangam.org/api/ContactUs', data, this.options)
  }

  matrimony(data): Observable<any> {
    return this.http.post('https://kammavarsangam.org/api/Matrimony', data, this.options)
  }

  getMatrimony(): Observable<any> {
    return this.http.get('https://kammavarsangam.org/api/matrimony', this.options)
  }

  getMatrimonyDetail(id): Observable<any> {
    return this.http.get('https://kammavarsangam.org/api/matrimony/'+id, this.options)
  }
}
