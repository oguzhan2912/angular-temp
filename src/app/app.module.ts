import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatFormFieldModule} from "@angular/material/form-field";

import {PagesModule} from "./page/pages.module";
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
    MatFormFieldModule,


  ],
  providers: [GeneralInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
