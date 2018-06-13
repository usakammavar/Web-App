import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {JobsService} from '../../services/jobs.service'

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  public jobList;
  ngOnInit() {

    this.jobs.getJobsList().subscribe(
      res => {
        console.log("job list response", res)
        this.jobList=res.json()
    });
    
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      city: ['', Validators.required],
      contact: ['', Validators.required],
      description: ['', Validators.required],
      jobType: ['', Validators.required],
      eligibility: ['', Validators.required],
      email: ['', Validators.required],
      state: ['', Validators.required],
      country:['', Validators.required]
  });
  }

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      public jobs: JobsService,
      private formBuilder: FormBuilder,
      private router: Router) { }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  showSpinner:boolean = false;
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log("Register", this.registerForm.value)
      this.jobs.postJob(this.registerForm.value).subscribe(res=>{
        this.showSpinner=true;
          setTimeout(()=>{
            this.showSpinner =false;
          },2000)
          window.location.reload();
      })

    }

}
