import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LanguageInfo} from "./language-info.model";
import {LanguageItemModel} from "./language-item/language-item.model";


@Injectable({
  providedIn: 'root'
})
export class LanguageInfoService {

  formData:LanguageInfo= new LanguageInfo();
  languageModel: Array<LanguageInfo>=[];
  constructor(private http: HttpClient) { }

  getItemList(){
    return this.http.get(environment.apiUrl + "Languages/GetLanguages").toPromise();
  }
  saveLanguage(languageModal:LanguageInfo){
    this.formData.LanguageID=languageModal.LanguageID;
    this.formData.LanguageName=languageModal.LanguageName;
    this.formData.LanguageExam=languageModal.LanguageExam;
    this.formData.SpeakingLvl=languageModal.SpeakingLvl;
    this.formData.ReadingLvl=languageModal.ReadingLvl;
    this.formData.UnderstandingLvl=languageModal.UnderstandingLvl;
    this.formData.WritingLvl=languageModal.WritingLvl;
    this.formData.LanguageExam=languageModal.LanguageExam;

    var body={
       LanguageDto:this.formData,
    }

    return this.http.post(environment.apiUrl + '/api/Language/SaveLanguage',body);
  }

}
