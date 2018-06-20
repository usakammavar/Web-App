import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  registerForm
  constructor(private formBuilder: FormBuilder, private jobs:JobsService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userEmail: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  showSpinner:boolean = false;
  submitted;
  errors;
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log("user email", this.registerForm.value)
      this.jobs.forgetPassword(this.registerForm.value).subscribe(res=>{
        this.showSpinner=true;
          setTimeout(()=>{
            this.showSpinner =false;
          },2000)
          this.router.navigate(["/login"]);
      },error =>{
        this.showSpinner = false;
        this.errors =<any>error;
        let errorJson = JSON.parse(this.errors.json());
    })
    }

}
