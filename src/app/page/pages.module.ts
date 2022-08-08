import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";

import {RegisterpageComponent} from "./registerpage/registerpage.component";


import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";


import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SingingComponent } from './singing/singing.component';
import { CvpageComponent } from './cvpage/cvpage.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatRadioModule} from "@angular/material/radio";
import {MatDividerModule} from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NestedStepperComponent } from './nested-stepper/nested-stepper.component';
import {DegreeModalComponent} from "./modals/degree-modal/degree-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import { PostgraduateDegreeComponent } from './modals/postgraduate-degree/postgraduate-degree.component';
import { LanguaeModalComponent } from './modals/languae-modal/languae-modal.component';
import { WorkmodalComponent } from './modals/workmodal/workmodal.component';
import { ReferanceModalComponent } from './modals/referance-modal/referance-modal.component';
import { SkillmodalComponent } from './modals/skillmodal/skillmodal.component';
import {MatExpansionModule} from "@angular/material/expansion";




// @ts-ignore



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,

    MatButtonModule,
    MatToolbarModule,

    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTreeModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,


  ],
  declarations: [


        RegisterpageComponent,
        SingingComponent,
        CvpageComponent,
        NestedStepperComponent,
        DegreeModalComponent,
        PostgraduateDegreeComponent,
        LanguaeModalComponent,
        WorkmodalComponent,
        ReferanceModalComponent,
        SkillmodalComponent,
  ],
  exports: [


    RegisterpageComponent,


  ],
  providers: [
  ],

})


export class PagesModule {}
