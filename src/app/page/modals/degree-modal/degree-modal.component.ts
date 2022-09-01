import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EducationInfo} from "../../../Services/EducationInfo/education-info.model";
import {departmentsDegree} from "../../../Data/Education/departmentstore";
import {schools} from "../../../Data/Education/educationstore";

@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html',
  styleUrls: ['./degree-modal.component.scss']
})
export class DegreeModalComponent implements OnInit {

  educationModel: EducationInfo=new EducationInfo();
  public departmentsDegree:any=departmentsDegree;
  public schools:any=schools;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
