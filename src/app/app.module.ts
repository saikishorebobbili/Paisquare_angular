import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './landingpage/login/login.component';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { FooterComponent } from './general/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './general/contactus/contactus.component';
import { LandingnavbarComponent } from './landingpage/landingnavbar/landingnavbar.component';
import { LandingcontentComponent } from './landingpage/landingcontent/landingcontent.component';
import { ProfileupdateComponent } from './user/profileupdate/profileupdate.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { TermsandConditionsComponent } from './static/termsand-conditions/termsand-conditions.component';
import { PrivacyPolicyComponent } from './static/privacy-policy/privacy-policy.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './static/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    NavbarComponent,
    ContactusComponent,
    LandingnavbarComponent,
    LandingcontentComponent,
    ProfileupdateComponent,
    ProfileComponent,
    UserdashboardComponent,
    TermsandConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([]),
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
