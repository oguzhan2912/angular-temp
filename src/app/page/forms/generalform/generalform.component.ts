import { Component, OnInit } from '@angular/core';
import {GeneralInfoService} from "../../../Services/GeneralInfo/general-info.service";
import {GeneralInfo} from "../../../Services/GeneralInfo/general-info.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-generalform',
  templateUrl: './generalform.component.html',
  styleUrls: ['./generalform.component.scss']
})
export class GeneralformComponent implements OnInit {

  generalModel: GeneralInfo=new GeneralInfo();

  constructor(public _formBuilder: FormBuilder,public generalService:GeneralInfoService) { }

  ngOnInit(): void {
  }

}
