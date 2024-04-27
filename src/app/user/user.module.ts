import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PrimengModule } from '../static/primeng.module';
import { UseractivitiesComponent } from './useractivities/useractivities.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomepageComponent } from '../advertiser/Ad/advertisements/homepage.component';
import { ProfileComponent } from '../settings/profile/profile.component';


@NgModule({
  declarations: [
    UserdashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule,
  ]
})
export class UserModule { }
