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
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: this.headers})
  }

  getJobsList(): Observable<any> {
    // let response=this.http.get('http://kammavar.gear.host/api/Job').map(this.jobs);
    // console.log("get home response", response)
    // return response
    return this.http.get('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job')
  }

  postJob(data:any): Observable<any> {
    data.postedBy="102";
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data, this.options)
  }

  getJobDetail(id): Observable<any> {
    return this.http.get('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job/'+id, this.options)
  }

  private jobs(res: Response) {
    let job = res.json();
    return job || { };
  }

  getFinanceList(): Observable<any> {
    return this.http.get('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job')
  }

  postFinance(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data)
  }

  getBride(): Observable<any> {
    return this.http.get('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job')
  }

  postBride(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data)
  }

  login(data): Observable<any> {
    this.headers =new Headers({'Content-Type': 'application/json',"Authorization":"Basic "+data,
    'Accept':'application/json','Access-Control-Allow-Headers': 'Content-Type'});
    this.options= new RequestOptions({headers: this.headers})
    return this.http.get('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Login', this.options)
  }

  register(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Register',data, this.options)
  }

  postContactForm(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Job', data)
  }

  forgetPassword(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/Login/ForgotPassword', data)
  }

  changePassword(data): Observable<any> {
    return this.http.post('http://kammavarusa.us-east-1.elasticbeanstalk.com/api/ChangePassword', data)
  }

}
