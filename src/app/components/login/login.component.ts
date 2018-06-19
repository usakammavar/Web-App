import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private job: JobsService,
      private user: UserService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  errors;
  parse:any;
  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      let data = this.loginForm.controls['username'].value+":"+this.loginForm.controls['password'].value
      let encodedData= btoa(data);
      
      this.job.login(encodedData).subscribe(res=>{
          let loginResponse;
          loginResponse = res.json();
          this.parse = JSON.parse(loginResponse)
          
          this.user.firstName= this.parse.firstName;
          this.user.lastName= this.parse.lastName;
          this.errors = this.parse.errorMessage;
          if(this.parse.errorMessage){
            return false
        }
          this.router.navigate(["/about"])
      }
    //   , error => {
    //     this.errors = this.parse.errorMessage;
    //   }
    )
  }
}
