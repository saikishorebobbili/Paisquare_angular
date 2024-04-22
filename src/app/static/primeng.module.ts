import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
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
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
const PRIMENG_MODULES:any[]=[
    CommonModule,
    DialogModule,
    FormsModule,
    InputTextareaModule,
    ListboxModule,
    OverlayPanelModule,
    MultiSelectModule,
    CheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    EditorModule,
    RatingModule,
    SidebarModule,
    TreeModule,
    ChipModule ,
    MenubarModule,
    ToolbarModule,
    InputTextModule,
    DropdownModule,
    KeyFilterModule,
]

@NgModule({
  declarations: [],
  imports: [...PRIMENG_MODULES],
  exports:[...PRIMENG_MODULES],
})
export class PrimengModule { }
