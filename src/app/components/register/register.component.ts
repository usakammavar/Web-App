import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private job : JobsService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email:['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            dob:['',Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            closestMetro: ['', Validators.required],
            nativeLocation: ['', Validators.required],
            houseName: ['', Validators.required],
            contactPhone: ['', Validators.required],
            profession: ['', Validators.required],
            kulaDeivam: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    userCreated:boolean = false;
    showSpinner:boolean = false;
    errors="";
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log("Register", this.registerForm.value)
        this.showSpinner=true;
        this.job.register(this.registerForm.value).subscribe(res=>{
            let registerResponse;
            registerResponse = res.json();
            if(registerResponse.UserId){
                this.showSpinner = false;
                this.userCreated=true;
                this.router.navigate(["/login"]);
                setTimeout(()=>{
                    this.userCreated=false
                },4000);
            }
        }
        ,error =>{
            this.showSpinner = false;
            let errors =error.json();
            this.errors= errors.ErrorMessage;
        })
    }
}