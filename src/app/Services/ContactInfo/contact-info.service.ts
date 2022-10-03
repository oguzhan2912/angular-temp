import { Injectable } from '@angular/core';
import * as countrycitystatejson from 'countrycitystatejson';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ContactInfo} from "./contact-info.model";
import {GeneralInfo} from "../GeneralInfo/general-info.model";
@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  apiUrl=environment.apiUrl;
  contactModel: Array<ContactInfo>=[];
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

  add(model: ContactInfo){
    let api= this.apiUrl+ "Contacts/SaveContacts";
    return this.http.post<any>(api,model);
  }
  update(model: ContactInfo){
    let api = this.apiUrl + "Contacts/UpdateContacts";
    return this.http.post<any>(api,model);
  }
  delete(model: ContactInfo){
    let api = this.apiUrl + "Contacts/DeleteContacts";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Contacts/GetContacts";
    return this.http.get<any>(api);
  }
}
