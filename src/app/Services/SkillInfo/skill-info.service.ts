import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillInfoService {

  constructor(private http: HttpClient) { }

  getItemList(){
    return this.http.get(environment.apiUrl + "Skills/GetSkills").toPromise();
  }
}
