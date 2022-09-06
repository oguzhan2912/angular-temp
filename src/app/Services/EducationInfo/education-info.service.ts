import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationInfoService {

  constructor(private http: HttpClient) { }

  getDegreeList(){
    return this.http.get(environment.apiUrl + "EducationDegrees/GetEducationDegrees").toPromise();
  }
  getAssociateList(){
    return this.http.get(environment.apiUrl + "EducationPostDegrees/GetEducationPostDegrees").toPromise();
  }


}
