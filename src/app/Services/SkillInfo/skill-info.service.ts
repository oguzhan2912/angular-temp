import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SkillInfo} from "./skill-info.model";

@Injectable({
  providedIn: 'root'
})
export class SkillInfoService {

  formData:SkillInfo= new SkillInfo();
  skillModel: Array<SkillInfo>=[];
  skillInfo:SkillInfo[];

  constructor(private http: HttpClient) { }

  getSkills(){
    return this.http.get(environment.apiUrl + "Skills/GetSkills").toPromise();
  }

  saveSkills(skillModel:SkillInfo){
    this.formData.id =skillModel.id;
    this.formData.SkillName=skillModel.SkillName;

    var body={
      skillDto:this.formData,
    }

    return this.http.post(environment.apiUrl + "Skills/SaveSkills",body);
  }
}
