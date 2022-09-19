import { Injectable } from '@angular/core';
import * as countrycitystatejson from 'countrycitystatejson';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ContactInfo} from "./contact-info.model";
@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  formData:ContactInfo= new ContactInfo();
  contactModel: Array<ContactInfo>=[];
  contactInfo:ContactInfo[];

  private countryData = countrycitystatejson;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.countryData.getCountries();
  }

  getStatesByCountry(countryShotName: string) {
    return this.countryData.getStatesByShort(countryShotName);
  }

  getCitiesByState(country:string, state: string) {
    return this.countryData.getCities(country, state);
  }

  getContact(){
    return this.http.get(environment.apiUrl+"Contacts/GetContacts").toPromise();
  }

  saveContact(contactModel:ContactInfo){
    this.formData.id =contactModel.id;
    this.formData.address=contactModel.address;
    this.formData.country=contactModel.country;
    this.formData.city=contactModel.city;
    this.formData.goal=contactModel.goal;
    this.formData.cellPhone=contactModel.cellPhone;
    this.formData.cellPhone2=contactModel.cellPhone2;
    this.formData.district=contactModel.district;
    this.formData.mailAdress=contactModel.mailAdress;
    this.formData.general=contactModel.general;
    this.formData.position=contactModel.position;
    this.formData.salaryExp=contactModel.salaryExp;
    this.formData.homePhone=contactModel.homePhone;
    this.formData.workPhone=contactModel.workPhone;

    var body={
      contactDto:this.formData,
    }

    return this.http.post(environment.apiUrl + "Contacts/GetContacts",body);
  }
}
