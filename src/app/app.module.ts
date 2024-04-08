import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './landingpage/login/login.component';
import { RegistrationComponent } from './landingpage/registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/advertisements/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertisementformComponent } from './homepage/advertisementform/advertisementform.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LandingnavbarComponent } from './landingpage/landingnavbar/landingnavbar.component';
import { LandingcontentComponent } from './landingpage/landingcontent/landingcontent.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { ChartModule } from 'primeng/chart';
import { UseractivitiesComponent } from './homepage/useractivities/useractivities.component';
import { AlladvertisementsComponent } from './homepage/alladvertisements/alladvertisements.component';
import { AdvertiserdashboardComponent } from './advertiserdashboard/advertiserdashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TermsandConditionsComponent } from './static/termsand-conditions/termsand-conditions.component';
import { PrivacyPolicyComponent } from './static/privacy-policy/privacy-policy.component'

import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from 'primeng/rating';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    LandingpageComponent,
    HomepageComponent,
    NavbarComponent,
    AdvertisementformComponent,
    ContactusComponent,
    LandingnavbarComponent,
    LandingcontentComponent,
    ProfileupdateComponent,
    ProfileComponent,
    AdvertiserreportsComponent,
    UseractivitiesComponent,
    AlladvertisementsComponent,
    AdvertiserdashboardComponent,
    UserdashboardComponent,
    TermsandConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextareaModule,
    CheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    EditorModule,
    RatingModule,
    SidebarModule,
    TreeModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
