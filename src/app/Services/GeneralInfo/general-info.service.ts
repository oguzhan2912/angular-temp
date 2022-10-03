import { Injectable } from '@angular/core';
import {GeneralInfo} from "./general-info.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
 export class GeneralInfoService {
  apiUrl=environment.apiUrl;
  generalModel: Array<GeneralInfo>=[];
  constructor(private http: HttpClient) { }

  add(model: GeneralInfo){
    let api= this.apiUrl+ "Generals/SaveGenerals";
    return this.http.post<any>(api,model);
  }
  update(model: GeneralInfo){
    let api = this.apiUrl + "Generals/UpdateGenerals";
    return this.http.post<any>(api,model);
  }
  delete(model: GeneralInfo){
    let api = this.apiUrl + "Generals/DeleteGenerals";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Generals/GetGenerals";
    return this.http.get<any>(api);
  }

}
