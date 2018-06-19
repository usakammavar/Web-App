import {ChangeDetectionStrategy, Component, Input,OnInit} from "@angular/core"
import {PaginationInstance} from '../../../../node_modules/ngx-pagination/dist/ngx-pagination.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: 'app-matrimonal',
  templateUrl: './matrimonal.component.html',
  styleUrls: ['./matrimonal.component.css']
})
export class MatrimonalComponent implements OnInit {

  brideForm;
  constructor(private formBuilder:FormBuilder, private jobs:JobsService) { }

  ngOnInit() {
    this.brideForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      qualification: ['', Validators.required],
      location: ['', Validators.required],
      dob: ['', Validators.required],
      native: ['', Validators.required],
      zodiac: ['', Validators.required],
      star:['', Validators.required],
      expectation:['', Validators.required],
      photo:['']
  });
  
  }

  public brides=[1,2,3,4,5,6,7,8,9]

  public showAddForm:boolean =false;
  postBride(){
    if(this.showAddForm){
       this.showAddForm=false;
    }else{
       this.showAddForm = true;
    }
    
  }
  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 6,
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
    get f() { return this.brideForm.controls; }

  showSpinner:boolean = false;
  submitted:boolean=false;
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.brideForm.invalid) {
          return;
      }
      console.log("Register", this.brideForm.value)
      this.jobs.postBride(this.brideForm.value).subscribe(res=>{
        this.showSpinner=true;
          setTimeout(()=>{
            this.showSpinner =false;
          },2000)
      })
    }

    selectedFile: File;
    onSelectFile(event){
      this.selectedFile = <File>event.target.files[0];
      console.log("File", this.selectedFile)
    }

    display:any="none";
    getBrideDetail(job){
      console.log("Selected Job", job)
      this.jobs.getJobDetail(job.jobId).subscribe(res=>{
          let response = res.json();
          //this.selectedBride= {...response, City:job.city, State:job.state, Country:job.country, Title:job.title}
          this.display ="block";
      })
    }

    closeModal(){
      this.display="none";
    }

    selectedBride:any

}
