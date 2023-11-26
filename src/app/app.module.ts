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
import { EditorModule } from 'primeng/editor';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertiserreportsComponent } from './advertiserreports/advertiserreports.component';
import { ChartModule } from 'primeng/chart';
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
    AdvertiserreportsComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    EditorModule,
    FormsModule,
    CheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
