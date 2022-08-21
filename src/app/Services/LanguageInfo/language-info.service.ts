import { Injectable } from '@angular/core';
import {LanguageInfo} from "./language-info.model";


@Injectable({
  providedIn: 'root'
})
export class LanguageInfoService {

    formData: LanguageInfo=new LanguageInfo();
  constructor() { }
}
