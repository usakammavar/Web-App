import { NgModule } from '@angular/core';
import {HomeService} from './home.service';
import {JobsService} from './jobs.service';
import {CommonModule} from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HomeService, JobsService,AuthGuardService, UserService],
  bootstrap: []
})

export class ServiceModule { }

