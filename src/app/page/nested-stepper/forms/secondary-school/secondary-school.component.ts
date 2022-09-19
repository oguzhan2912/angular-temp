import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-secondary-school',
  templateUrl: './secondary-school.component.html',
  styleUrls: ['./secondary-school.component.scss']
})
export class SecondarySchoolComponent implements OnInit {

  constructor() { }
  educationModel:EducationInfo=new EducationInfo();
  ngOnInit(): void {
  }

}
