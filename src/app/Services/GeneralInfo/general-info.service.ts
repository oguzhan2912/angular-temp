import { Injectable } from '@angular/core';
import {GeneralInfo} from "./general-info.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
 export class GeneralInfoService {



  constructor(private http: HttpClient) { }

  getItemList(){
    return this.http.get(environment.apiUrl+"Languages/GetGenerals").toPromise();
  }
}
