import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdvertiserRoutingModule } from './advertiser.routes';
import { AdvertisementformComponent } from './Ad/advertisementform/advertisementform.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { AlladvertisementsComponent } from './Ad/alladvertisements/alladvertisements.component';
import { PrimengModule } from '../static/primeng.module';
import { UseractivitiesComponent } from './useractivities/useractivities.component';
import { HomepageComponent } from './Ad/advertisements/homepage.component';

@NgModule({
  declarations: [
    AdvertisementformComponent,
    AdvertiserdashboardComponent,
    AdvertiserreportsComponent,
    AlladvertisementsComponent,
    UseractivitiesComponent,
    HomepageComponent,
  ],
  imports: [
    RouterModule.forChild([]),
    AdvertiserRoutingModule,
    PrimengModule
  ]
})
export class AdvertiserModule { }
