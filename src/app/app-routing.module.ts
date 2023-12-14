import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landingpage/login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { HomepageComponent } from './homepage/advertisements/homepage.component';
import { AdvertisementformComponent } from './homepage/advertisementform/advertisementform.component';
import { LandingcontentComponent } from './landingpage/landingcontent/landingcontent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { UseractivitiesComponent } from './homepage/useractivities/useractivities.component';
import { AlladvertisementsComponent } from './homepage/alladvertisements/alladvertisements.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
const routes: Routes = [
  { path: 'profileupdate', component:ProfileupdateComponent},
  { path: 'login', component:LoginComponent },
  { path: 'advertisementform', component:AdvertisementformComponent},
  { path: 'createaccount', component:RegistrationComponent },
  { path: 'alladvertisements', component:AlladvertisementsComponent },
  { path: 'contactus',component:ContactusComponent},
  { path: 'advertisement/:id', component: AlladvertisementsComponent }, 
  { path: 'myadvertisement/:userId', component: AlladvertisementsComponent },
  { path: 'profile/:id', component:ProfileComponent},
  { path: 'block/:id', component:LandingcontentComponent},
  { path: 'reportadvertisement/:id', component:LandingcontentComponent},
  { path: 'save/:id', component:LandingcontentComponent},
  { path: 'advertiserreport', component:AdvertiserreportsComponent},
  { path: 'useractivities', component:UseractivitiesComponent},
  {path: 'advertiserdashboard',component:AdvertiserdashboardComponent},
  { path: '', component:LandingcontentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
