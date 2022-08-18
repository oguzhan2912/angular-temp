import { Injectable } from '@angular/core';
import {GeneralInfo} from "./general-info.model";

@Injectable({
  providedIn: 'root'
})
 export class GeneralInfoService {

   formData:GeneralInfo;

  constructor() { }
}
