import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OtherInfo} from "./other-info.model";

@Injectable({
  providedIn: 'root'
})
export class OtherInfoService {

  formData:OtherInfo= new OtherInfo();
  otherModel: Array<OtherInfo>=[];
  otherInfo:OtherInfo[];

  constructor(private http: HttpClient) { }
  getOther(){
    return this.http.get(environment.apiUrl+"Others/GetOthers").toPromise();
  }
  saveContact(otherModel:OtherInfo){
    this.formData.id =otherModel.id;
    this.formData.militaryStatus=otherModel.militaryStatus;
    this.formData.cigarette=otherModel.cigarette;
    this.formData.travelContinents=otherModel.travelContinents;
    this.formData.interests=otherModel.interests;
    this.formData.memberNGO=otherModel.memberNGO;
    this.formData.completionDate=otherModel.completionDate;
    this.formData.defermentDate=otherModel.defermentDate;

    var body={
      otherDto:this.formData,
    }

    return this.http.post(environment.apiUrl + "Others/SaveOthers",body);
  }
}
