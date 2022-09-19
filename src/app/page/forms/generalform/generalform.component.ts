import {Component, Inject, OnInit} from '@angular/core';
import {GeneralInfoService} from "../../../Services/GeneralInfo/general-info.service";
import {GeneralInfo} from "../../../Services/GeneralInfo/general-info.model";
import {FormBuilder, FormControl, NgForm} from "@angular/forms";
import {genders} from "../../../Data/General/genderstore";
import {educations} from "../../../Data/General/educationstore";
import {identities} from "../../../Data/General/identitystore";
import {drivers} from "../../../Data/General/driverstore";
import {nations} from "../../../Data/General/nationstore";
import {cities} from "../../../Data/General/citystore";
import {countries} from "../../../Data/General/countrystore";
import {marriages} from "../../../Data/General/marriagestore";

import {PostgraduateDegreeComponent} from "../../modals/postgraduate-degree/postgraduate-degree.component";
import{MatDialog} from "@angular/material/dialog";
import {PPhotoModelComponent} from "../../modals/p-photo-model/p-photo-model.component";

@Component({
  selector: 'app-generalform',
  templateUrl: './generalform.component.html',
  styleUrls: ['./generalform.component.scss']
})
export class GeneralformComponent implements OnInit {

  formData:GeneralInfo;
  generalModel: GeneralInfo=new GeneralInfo();

  disableSelectCitizen = new FormControl();
  disableSelectDriver = new FormControl();
  public genders:any=genders;
  public educations:any=educations;
  public identities:any=identities;
  public drivers:any=drivers;
  public nations:any=nations;
  public cities:any=cities;
  public countries:any=countries;
  public marriages:any=marriages;



  constructor( _formBuilder: FormBuilder,public generalService:GeneralInfoService, public dialog:MatDialog) { }


  ngOnInit(): void {/*
    if(this.data==null){
      this.formData={
        id:0,
        name:"",
        lastname:"",
        graduation:"",
        gender:"",
        identityType:"",
        identityNum:0,
        driverLicense:false,
        martialStatus:"",
        driverLicenseType:"",
        nation:"",
        dateOfBirth:"",
        bornedCountry:"",
        bornedCity:"",
      }
    }else{
      this.formData=Object.assign({},this.generalService.generalModel[this.data.GeneralModelIndex]);
    }
*/

  }

  resetForm(form?: NgForm) {
    form?.resetForm();
  }



  onSubmit(form:NgForm){
    this.generalService.saveGeneral(this.generalModel).subscribe(res=>{this.resetForm();});

  }
  openModal() {
    this.dialog.open(PPhotoModelComponent);
  }

}
