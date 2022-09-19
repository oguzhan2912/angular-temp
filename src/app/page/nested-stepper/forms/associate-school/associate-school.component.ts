import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {departmentAssociate} from "../../../../Data/Education/associatestore";
import {schools} from "../../../../Data/Education/educationstore";

@Component({
  selector: 'app-associate-school',
  templateUrl: './associate-school.component.html',
  styleUrls: ['./associate-school.component.scss']
})
export class AssociateSchoolComponent implements OnInit {
  educationModel:EducationInfo=new EducationInfo();
  public departmentAssociate:any=departmentAssociate;
  public schools:any=schools;
  constructor() { }

  ngOnInit(): void {
  }

}
