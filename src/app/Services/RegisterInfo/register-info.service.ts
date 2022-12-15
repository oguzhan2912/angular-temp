import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleResponseModel } from '../Model/single-response-model/single-response-model.model';
import { User } from './register-info.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterInfoService {
  apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(model: User){
    let api= this.apiUrl+ "Languages/SaveLanguages";
    return this.http.post<any>(api,model);
  }
  update(model: User){
    let api = this.apiUrl + "Languages/UpdateLanguages";
    return this.http.post<any>(api,model);
  }
  delete(model: User){
    let api = this.apiUrl + "Languages/DeleteLanguages";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Languages/GetLanguages";
    return this.http.get<any>(api);
  }
  getItemByID(id: number):Observable<SingleResponseModel<User>>{
    let api = this.apiUrl + "Languages/GetLanguageById?languageId="+id;
    return this.http.get<SingleResponseModel<User>>(api);
  }ng 
}
