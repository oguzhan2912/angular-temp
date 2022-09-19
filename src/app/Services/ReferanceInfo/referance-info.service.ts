import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ReferanceInfo} from "./referance-info.model";

@Injectable({
  providedIn: 'root'
})
export class ReferanceInfoService {

  formData:ReferanceInfo= new ReferanceInfo();
  referanceModel: Array<ReferanceInfo>=[];
  referanceInfo:ReferanceInfo[];

  constructor(private http: HttpClient) { }

  getReferances(){
    return this.http.get(environment.apiUrl + "Referances/GetReferances").toPromise();
  }

  saveReferance(referanceModel:ReferanceInfo){
    this.formData.id =referanceModel.id;
    this.formData.ReferancePhoneNumber2=referanceModel.ReferancePhoneNumber2;
    this.formData.ReferanceEmail=referanceModel.ReferanceEmail;
    this.formData.ReferanceName=referanceModel.ReferanceName;
    this.formData.ReferancePhoneNumber=referanceModel.ReferancePhoneNumber;
    this.formData.ReferanceFoundation=referanceModel.ReferanceFoundation;

    var body={
      referanceDto:this.formData,    }

    return this.http.post(environment.apiUrl + "Referances/SaveReferances",body);
  }
}
