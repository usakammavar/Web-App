import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private user: UserService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private jobs:JobsService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          userName: ['', Validators.required],
          oldPassword: ['', Validators.required],
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  showSpinner:boolean=false;
  errors;
  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      console.log("change Password", this.loginForm.value)  
      this.jobs.changePassword(this.loginForm.value).subscribe(res=>{
        this.showSpinner=true;
          setTimeout(()=>{
            this.showSpinner =false;
          },2000)
          this.router.navigate(["/login"]);
      },error=>{
        this.showSpinner = false;
        this.errors =<any>error;
        let errorJson = JSON.parse(this.errors.json());
      })
    
  }
}
