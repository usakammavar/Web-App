import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private job:JobsService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
  });
  }

  get f() { return this.contactForm.controls; }

  showSpinner:boolean =false;
  errors;
  contactSuccess:boolean=false;
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
        return;
    }
    console.log("Register", this.contactForm.value)
    this.job.contactUs(this.contactForm.value).subscribe(res=>{
      let registerResponse;
      registerResponse = res.json();
          this.showSpinner = false;
          this.contactSuccess=true;
          setTimeout(()=>{
            this.contactSuccess=false
        },3000);
  },error =>{
      this.showSpinner = false;
      this.errors =<any>error;
      let errorJson = JSON.parse(this.errors.json());
  })
}

}
