import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {RegisterpageComponent} from "./page/registerpage/registerpage.component";
import {SingingComponent} from "./page/singing/singing.component";
import {CvpageComponent} from "./page/cvpage/cvpage.component";
import {TemplatePageComponent} from "./page/template-page/template-page.component";
import {ProfilepageComponent} from "./page/profilepage/profilepage.component";
import {JonadvertisementpageComponent} from "./page/jonadvertisementpage/jonadvertisementpage.component";
import {JobapplicationpageComponent} from "./page/jobapplicationpage/jobapplicationpage.component";

const routes: Routes = [
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: RegisterpageComponent },
  { path: "singing", component: SingingComponent },
  { path: "cvpage", component: CvpageComponent},
  { path: "template-page", component:TemplatePageComponent},
  { path: "profile", component:ProfilepageComponent},
  { path: "jobAdvertise", component:JonadvertisementpageComponent},
  { path:"jobApplication", component:JobapplicationpageComponent},
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
