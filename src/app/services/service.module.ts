import { NgModule } from '@angular/core';
import {HomeService} from './home.service';
import {JobsService} from './jobs.service';


@NgModule({
  declarations: [],
  imports: [],
  providers: [HomeService, JobsService],
  bootstrap: []
})

export class ServiceModule { }

