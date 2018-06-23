import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment'

@Injectable()
export class JobsService {


  options;
  headers;
  constructor(private http: Http) { 
    this.headers =new Headers({'Content-Type': 'application/json',"Authorization": "",
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type',
    'ClientId':'c6a913c1-e38d-4057-9db5-c3ea5182719b','Tenant':'vashok4uhotmail.onmicrosoft.com',
    'Audience':'https://vashok4uhotmail.onmicrosoft.com/KammaWebApi' });
    this.options= new RequestOptions({headers: this.headers})
  }

  getJobsList(): Observable<any> {
    // let response=this.http.get('https://kammavar.gear.host/api/Job').map(this.jobs);
    // console.log("get home response", response)
    // return response
    return this.http.get('https://kammavarusa.azurewebsites.net/api/Job', this.options)
  }

  postJob(data:any): Observable<any> {
    data.postedBy="102";
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data, this.options)
  }

  getJobDetail(id): Observable<any> {
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job/'+id, this.options)
  }

  private jobs(res: Response) {
    let job = res.json();
    return job || { };
  }

  getFinanceList(): Observable<any> {
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', this.options)
  }

  postFinance(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data, this.options)
  }

  getBride(): Observable<any> {
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', this.options)
  }

  postBride(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data, this.options)
  }

  login(data): Observable<any> {
    this.headers =new Headers({'Content-Type': 'application/json',"Authorization":"Basic "+data,
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: this.headers})
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Login', this.options)
  }

  register(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Register',data, this.options)
  }

  postContactForm(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data, this.options)
  }

  forgetPassword(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Login/ForgotPassword', data, this.options)
  }

  changePassword(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/ChangePassword', data, this.options)
  }

  contactUs(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/ContactUs', data, this.options)
  }

  matrimony(data): Observable<any> {
    return this.http.post('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/Matrimony', data, this.options)
  }

  getMatrimony(): Observable<any> {
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/matrimony', this.options)
  }

  getMatrimonyDetail(id): Observable<any> {
    return this.http.get('https://kammavarusa.us-east-1.elasticbeanstalk.com/api/matrimony/'+id, this.options)
  }
}
