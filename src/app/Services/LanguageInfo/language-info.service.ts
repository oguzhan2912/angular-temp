import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LanguageInfo} from "./language-info.model";
import {Observable} from "rxjs";
import {Language} from "countrycitystatejson/src/countries-list";
import {SingleResponseModel} from "../Model/single-response-model/single-response-model.model";


@Injectable({
  providedIn: 'root'
})
export class LanguageInfoService {
  languageModel: Array<LanguageInfo>=[];
  apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(model: LanguageInfo){
    let api= this.apiUrl+ "Languages/SaveLanguages";
    return this.http.post<any>(api,model);
  }
  update(model: LanguageInfo){
    let api = this.apiUrl + "Languages/UpdateLanguages";
    return this.http.post<any>(api,model);
  }
  delete(model: LanguageInfo){
    let api = this.apiUrl + "Languages/DeleteLanguages";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "Languages/GetLanguages";
    return this.http.get<any>(api);
  }
  getItemByID(languageId: number):Observable<SingleResponseModel<Language>>{
    let api = this.apiUrl + "Languages/GetLanguageById?languageId="+languageId;
    return this.http.get<SingleResponseModel<Language>>(api);
  }
}
