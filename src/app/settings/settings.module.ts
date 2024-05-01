import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';

import { SettingsRoutingModule } from './settings.routes';
import { PrimengModule } from '../static/primeng.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileupdateComponent
  ],
  imports: [
    RouterModule.forChild([]),
    SettingsRoutingModule,
    PrimengModule
  ],
  providers: [MessageService]
})
export class SettingsModule { }
