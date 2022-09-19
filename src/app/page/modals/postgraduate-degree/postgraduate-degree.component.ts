import { Component, OnInit } from '@angular/core';
import {EducationInfo, PostDegreeInfo} from "../../../Services/EducationInfo/education-info.model";
import {schools} from "../../../Data/Education/educationstore";
import {states} from "../../../Data/Education/eduState";

@Component({
  selector: 'app-postgraduate-degree',
  templateUrl: './postgraduate-degree.component.html',
  styleUrls: ['./postgraduate-degree.component.scss']
})
export class PostgraduateDegreeComponent implements OnInit {

  educationModel: PostDegreeInfo=new PostDegreeInfo();
  public schools:any=schools;
  public states:any=states;
  constructor() { }

  ngOnInit(): void {
  }

}
