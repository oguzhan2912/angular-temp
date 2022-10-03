import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SkillInfo} from "./skill-info.model";

@Injectable({
  providedIn: 'root'
})
export class SkillInfoService {

  apiUrl=environment.apiUrl;
  skillModel: Array<SkillInfo>=[];

  constructor(private http: HttpClient) { }

  add(model: SkillInfo){
    let api= this.apiUrl+ "Skills/SaveSkills";
    return this.http.post<any>(api,model);
  }
  update(model: SkillInfo){
    let api = this.apiUrl + "Skills/UpdateSkills";
    return this.http.post<any>(api,model);
  }
  delete(model: SkillInfo){
    let api = this.apiUrl + "Skills/DeleteSkills";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Skills/GetSkills";
    return this.http.get<any>(api);
  }
}
