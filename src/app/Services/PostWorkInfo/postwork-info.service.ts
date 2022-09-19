import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PostworkInfo} from "./postwork-info.model";

@Injectable({
  providedIn: 'root'
})
export class PostworkInfoService {

  formData:PostworkInfo= new PostworkInfo();
  postWorkModel: Array<PostworkInfo>=[];
  postWorkInfo:PostworkInfo[];

  constructor(private http: HttpClient) { }

  getPostWork(){
    return this.http.get(environment.apiUrl + "PostWorks/GetPostWorks").toPromise();
  }
  savePostWork(postWorkModel:PostworkInfo){
    this.formData.id =postWorkModel.id;
    this.formData.CompanyMission=postWorkModel.CompanyMission;
    this.formData.CompanyName=postWorkModel.CompanyName;
    this.formData.CompanyLeavingDate=postWorkModel.CompanyLeavingDate;
    this.formData.CompanySalary=postWorkModel.CompanySalary;
    this.formData.CompanyStillWorking=postWorkModel.CompanyStillWorking;
    this.formData.CompanyStartingDate=postWorkModel.CompanyStartingDate;
    this.formData.CompanyDepartment=postWorkModel.CompanyDepartment;
    this.formData.CompanyLeavingReason=postWorkModel.CompanyLeavingReason;

    var body={
      postWorkDto:this.formData,
    }

    return this.http.post(environment.apiUrl + "PostWorks/SavePostWorks",body);
  }
}
