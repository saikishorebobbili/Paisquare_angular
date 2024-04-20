import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlladvertisementsComponent } from './Ad/alladvertisements/alladvertisements.component';
import { UseractivitiesComponent } from './useractivities/useractivities.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
const routes: Routes = [
  { path: '', component: AlladvertisementsComponent },
  { path: 'useractivities', component: UseractivitiesComponent },
  { path: 'advertiserdashboard', component: AdvertiserdashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AdvertiserRoutingModule {}
