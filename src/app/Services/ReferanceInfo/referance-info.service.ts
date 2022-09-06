import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReferanceInfoService {

  constructor(private http: HttpClient) { }

  getItemList(){
    return this.http.get(environment.apiUrl + "Referances/GetReferances").toPromise();
  }
}
