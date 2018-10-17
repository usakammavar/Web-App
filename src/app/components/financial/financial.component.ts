import {ChangeDetectionStrategy, Component, Input,OnInit} from "@angular/core"
import {PaginationInstance} from '../../../../node_modules/ngx-pagination/dist/ngx-pagination.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from "../../services/user.service";
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  posts
//   =[
//     {'name':'Prasad', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vinoth', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Sachin', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Anand', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vijay', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Prasad', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vinoth', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Sachin', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Anand', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vijay', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Prasad', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vinoth', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Sachin', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Anand', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vijay', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Prasad', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vinoth', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Sachin', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Anand', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vijay', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Prasad', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vinoth', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Sachin', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Anand', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//     {'name':'Vijay', 'date':'May 03,2018','body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
//   ]


  registerForm: FormGroup;
  loading = false;
  submitted = false;
  financeList;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      public jobs: JobsService,
      private user: UserService) { }

  ngOnInit() {
    this.jobs.getFinanceList().subscribe(
        res => {
          console.log("job list response", res)
          this.posts=res.json();
          this.posts = res.json();
      });
      this.registerForm = this.formBuilder.group({
          firstName: [this.user.firstName, Validators.required],
          lastName: [this.user.lastName, Validators.required],
          userName: [this.user.userName, Validators.required],
          message: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.jobs.postFinance(this.registerForm.value).subscribe(res=>{
        // this.showSpinner=true;
        //   setTimeout(()=>{
        //     this.showSpinner =false;
        //   },2000)
          window.location.reload();
      })
      console.log("Register", this.registerForm.value)
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
