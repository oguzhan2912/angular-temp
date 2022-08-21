import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-postgraduate-degree',
  templateUrl: './postgraduate-degree.component.html',
  styleUrls: ['./postgraduate-degree.component.scss']
})
export class PostgraduateDegreeComponent implements OnInit {

  educationModel: EducationInfo=new EducationInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
