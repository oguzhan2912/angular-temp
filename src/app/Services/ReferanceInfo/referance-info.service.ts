import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ReferanceInfo} from "./referance-info.model";

@Injectable({
  providedIn: 'root'
})
export class ReferanceInfoService {

  apiUrl=environment.apiUrl;
  referanceModel: Array<ReferanceInfo>=[];

  constructor(private http: HttpClient) { }

  add(model: ReferanceInfo){
    let api= this.apiUrl+ "Referances/SaveReferances";
    return this.http.post<any>(api,model);
  }
  update(model: ReferanceInfo){
    let api = this.apiUrl + "Referances/UpdateReferances";
    return this.http.post<any>(api,model);
  }
  delete(model: ReferanceInfo){
    let api = this.apiUrl + "Referances/DeleteReferances";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Referances/GetReferances";
    return this.http.get<any>(api);
  }

}
