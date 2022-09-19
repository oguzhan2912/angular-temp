import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DegreeInfo, EducationInfo} from "../../../Services/EducationInfo/education-info.model";
import {departmentsDegree} from "../../../Data/Education/departmentstore";
import {schools} from "../../../Data/Education/educationstore";
import {states} from "../../../Data/Education/eduState";

@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html',
  styleUrls: ['./degree-modal.component.scss']
})
export class DegreeModalComponent implements OnInit {

  educationModel: DegreeInfo=new DegreeInfo();
  public departmentsDegree:any=departmentsDegree;
  public schools:any=schools;
  public states:any=states;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
