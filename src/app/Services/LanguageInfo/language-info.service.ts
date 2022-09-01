import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LanguageInfo} from "./language-info.model";


@Injectable({
  providedIn: 'root'
})
export class LanguageInfoService {

  languageModel: Array<LanguageInfo>=[];
  constructor(private http: HttpClient) { }

  getItemList(){
    return this.http.get(environment.apiUrl + "Languages/GetLanguages").toPromise();
  }


}
