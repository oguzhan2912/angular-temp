import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { EducationInfo} from "./education-info.model";
import {SkillInfo} from "../SkillInfo/skill-info.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ListResponseModel} from "../Model/list-response-model/list-response-model.model";

@Injectable({
  providedIn: 'root'
})
export class EducationInfoService {

  apiUrl=environment.apiUrl;
  educationModel: Array<EducationInfo>=[];
  EducationModel:EducationInfo[];

  constructor(private http: HttpClient) { }

  add(model: EducationInfo){
    let api= this.apiUrl+ "Educations/SaveEducations";
    return this.http.post<any>(api,model);
  }
  update(model: EducationInfo){
    let api = this.apiUrl + "Educations/UpdateEducations";
    return this.http.post<any>(api,model);
  }
  delete(model: EducationInfo){
    let api = this.apiUrl + "Educations/DeleteEducations";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Educations/GetEducations";
    return this.http.get<any>(api);
  }
  getListByGradeLevel( gradeLevel: number):Observable<ListResponseModel<EducationInfo>>{
    let api = this.apiUrl + "Educations/GetEducationsGradeLevel?gradeLevel="+gradeLevel;
    return this.http.get<ListResponseModel<EducationInfo>>(api);
  }



}
