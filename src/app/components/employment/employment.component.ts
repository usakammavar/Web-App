import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  constructor(private jobs: JobsService) { }

  private jobList;
  ngOnInit() {

    this.jobs.getJobsList().subscribe(
      data => {
        this.jobList=data
    });
    
  }

}
