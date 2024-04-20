import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingcontentComponent } from './landingpage/landingcontent/landingcontent.component';
import { LoginComponent } from './landingpage/login/login.component';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { ProfileupdateComponent } from './user/profileupdate/profileupdate.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdvertiserreportsComponent } from './advertiser/advertiserreports/advertiserreports.component';
import { UseractivitiesComponent } from './advertiser/useractivities/useractivities.component';
import { AdvertiserdashboardComponent } from './advertiser/advertiserdashboard/advertiserdashboard.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./advertiser/advertiser.module').then(m => m.AdvertiserModule)
  },
  { path: 'profileupdate', component: ProfileupdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: RegistrationComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'block/:id', component: LandingcontentComponent },
  { path: 'reportadvertisement/:id', component: LandingcontentComponent },
  { path: 'save/:id', component: LandingcontentComponent },
  { path: 'advertiserreport', component: AdvertiserreportsComponent },
  { path: '', component: LandingcontentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
