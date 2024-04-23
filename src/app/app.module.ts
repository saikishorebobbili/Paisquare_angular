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
import { TermsandConditionsComponent } from './general/termsand-conditions/termsand-conditions.component';
import { PrivacyPolicyComponent } from './general/privacy-policy/privacy-policy.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './static/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    TermsandConditionsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
