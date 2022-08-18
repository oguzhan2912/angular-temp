import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {PagesModule} from "./page/pages.module";
import { DegreeModalComponent } from './page/modals/degree-modal/degree-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {GeneralInfoService} from "./Services/GeneralInfo/general-info.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    MatDialogModule,
    MatButtonModule,

  ],
  providers: [GeneralInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
