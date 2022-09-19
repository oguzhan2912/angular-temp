import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {schools} from "../../../../Data/Education/educationstore";
import {states} from "../../../../Data/Education/eduState";

@Component({
  selector: 'app-phd-school',
  templateUrl: './phd-school.component.html',
  styleUrls: ['./phd-school.component.scss']
})
export class PhdSchoolComponent implements OnInit {
  educationModel:EducationInfo=new EducationInfo();
  public schools:any=schools;
  public states:any= states;
  constructor() { }

  ngOnInit(): void {
  }

}
