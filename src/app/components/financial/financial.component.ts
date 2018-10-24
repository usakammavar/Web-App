import {ChangeDetectionStrategy, Component, Input,OnInit} from "@angular/core"
import {PaginationInstance} from '../../../../node_modules/ngx-pagination/dist/ngx-pagination.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from "../../services/user.service";
import { JobsService } from "../../services/jobs.service";
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  @ViewChild('closeAdd') closeAdd: ElementRef;
  posts
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  financeList;
  message="";

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      public jobs: JobsService,
      private user: UserService) { }

  ngOnInit() {
        this.getList();
      this.registerForm = this.formBuilder.group({
          firstName: [this.user.firstName, Validators.required],
          lastName: [this.user.lastName, Validators.required],
          userName: [this.user.userName, Validators.required],
          message: ['', Validators.required]
      });
  }

  getList(){
    this.jobs.getFinanceList().subscribe(
        res => {
          console.log("job list response", res)
          this.posts=res.json();
          this.posts = res.json();
      });
      this.showSpinner =false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  showSpinner:boolean = false;
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.jobs.postFinance(this.registerForm.value).subscribe(res=>{
        this.showSpinner=true;
        this.getList();
        this.closeAdd.nativeElement.click();
        this.message="Details Posted Successfully!!!"
        setTimeout(()=>{this.message="";},3000);
      })
  }


    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 5,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };



    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

}
