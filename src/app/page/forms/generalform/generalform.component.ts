import {Component, Inject, OnInit} from '@angular/core';
import {GeneralInfoService} from "../../../Services/GeneralInfo/general-info.service";
import {GeneralInfo} from "../../../Services/GeneralInfo/general-info.model";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
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

  generalForm:FormGroup;
  generalModel: GeneralInfo=new GeneralInfo();


  public genders:any=genders;
  public educations:any=educations;
  public identities:any=identities;
  public drivers:any=drivers;
  public nations:any=nations;
  public cities:any=cities;
  public countries:any=countries;
  public marriages:any=marriages;


  constructor( public dialog: MatDialog,public generalService:GeneralInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
    this.enableNation();
    this.enableDriverLicense();
  }

  createNewForm(){
    this.generalForm=new FormGroup(
      {
        name:new FormControl("",[Validators.required,]),
        lastname:new FormControl("",[Validators.required,]),
        graduation:new FormControl("",[Validators.required,]),
        gender:new FormControl("",[Validators.required,]),
        identityType:new FormControl("",[Validators.required,]),
        identityNum:new FormControl("",[Validators.required,]),
        martialStatus:new FormControl("",[Validators.required,]),
        driverLicenseType:new FormControl("",[Validators.required,]),
        nation:new FormControl("",[Validators.required,]),
        dateOfBirth:new FormControl("",[Validators.required,]),
        bornedCountry:new FormControl("",[Validators.required,]),
        bornedCity:new FormControl("",[Validators.required,]),
        disableSelectCitizen :new FormControl("",[Validators.required,]),
        disableSelectDriver :new FormControl("",[Validators.required,]),
      }
    )
  }

  save(){
    this.generalService.add(this.generalForm.value).subscribe({
      next:(res)=>this.generalService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.generalForm.value);
    this.createNewForm();
  }
  openModal() {
    this.dialog.open(PPhotoModelComponent);
  }

  enableNation(){
    this.generalForm.get('disableSelectCitizen')?.valueChanges.subscribe(data=>{

      if (data==false){
        this.generalForm.get('identityType')?.enable();
        this.generalForm.get('identityNum')?.enable();
      }else{
        this.generalForm.get('identityType')?.disable();
        this.generalForm.get('identityNum')?.disable();
      }
    })
  }
  enableDriverLicense(){
    this.generalForm.get('disableSelectDriver')?.valueChanges.subscribe(data=>{
      if (data==false){
        this.generalForm.get('driverLicenseType')?.enable();
      }else{
        this.generalForm.get('driverLicenseType')?.disable();
       }
      }
    )
  }


}
