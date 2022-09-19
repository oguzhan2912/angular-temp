import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-high-school',
  templateUrl: './high-school.component.html',
  styleUrls: ['./high-school.component.scss']
})
export class HighSchoolComponent implements OnInit {
  educationModel:EducationInfo=new EducationInfo();
  constructor() { }

  ngOnInit(): void {
  }

}
