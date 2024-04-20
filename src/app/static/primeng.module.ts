import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from 'primeng/rating';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

const PRIMENG_MODULES:any[]=[
    CommonModule,
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
]

@NgModule({
  declarations: [],
  imports: [...PRIMENG_MODULES],
  exports:[...PRIMENG_MODULES],
})
export class PrimengModule { }
