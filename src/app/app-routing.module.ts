import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {RegisterpageComponent} from "./page/registerpage/registerpage.component";
import {SingingComponent} from "./page/singing/singing.component";
import {CvpageComponent} from "./page/cvpage/cvpage.component";

const routes: Routes = [
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: RegisterpageComponent },
  { path: "singing", component: SingingComponent },
  { path: "cvpage", component: CvpageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
