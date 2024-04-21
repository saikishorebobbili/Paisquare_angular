import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';

import { SettingsRoutingModule } from './settings.routes';
import { PrimengModule } from '../static/primeng.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { UserdashboardComponent } from '../user/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileupdateComponent,
    UserdashboardComponent,
  ],
  imports: [
    RouterModule.forChild([]),
    SettingsRoutingModule,
    PrimengModule
  ]
})
export class SettingsModule { }
