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
          console.log("user res",loginResponse )
          let parse = JSON.parse(loginResponse)
          this.user.firstName= parse.firstName;
          console.log("user firstNAme", parse.firstName,'.........',this.user.firstName)
          this.user.lastName= loginResponse.lastName;
          this.router.navigate(["/about"])
      })
  }
}
