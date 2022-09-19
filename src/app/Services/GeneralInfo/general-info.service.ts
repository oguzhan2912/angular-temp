import { Injectable } from '@angular/core';
import {GeneralInfo} from "./general-info.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LanguageInfo} from "../LanguageInfo/language-info.model";

@Injectable({
  providedIn: 'root'
})
 export class GeneralInfoService {

  formData:GeneralInfo= new GeneralInfo();
  generalModel: Array<GeneralInfo>=[];
  generalInfo:GeneralInfo[];


  constructor(private http: HttpClient) { }

  getGeneral(){
    return this.http.get(environment.apiUrl+"Generals/GetGenerals").toPromise();
  }

  saveGeneral(generalModel:GeneralInfo){
    this.formData.id =generalModel.id;
    this.formData.name=generalModel.name;
    this.formData.lastname=generalModel.lastname;
    this.formData.bornedCity=generalModel.bornedCity;
    this.formData.bornedCountry=generalModel.bornedCountry;
    this.formData.nation=generalModel.nation;
    this.formData.driverLicenseType=generalModel.driverLicenseType;
    this.formData.martialStatus=generalModel.martialStatus;
    this.formData.identityNum=generalModel.identityNum;
    this.formData.identityType=generalModel.identityType;
    this.formData.graduation=generalModel.graduation;
    this.formData.gender=generalModel.graduation;
    this.formData.driverLicense=generalModel.driverLicense;
    this.formData.dateOfBirth=generalModel.dateOfBirth;

    var body={
      GeneralDto:this.formData,
    }

    return this.http.post(environment.apiUrl + "Generals/SaveGenerals",body);
  }

}
