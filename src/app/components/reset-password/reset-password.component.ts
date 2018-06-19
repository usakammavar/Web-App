import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  registerForm
  constructor(private formBuilder: FormBuilder, private jobs:JobsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userEmail: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  showSpinner:boolean = false;
  submitted
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
      })
    }

}
