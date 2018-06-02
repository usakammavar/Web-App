import { NgModule } from '@angular/core';
import {HomeService} from './home.service';
import {JobsService} from './jobs.service';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HomeService, JobsService],
  bootstrap: []
})

export class ServiceModule { }

