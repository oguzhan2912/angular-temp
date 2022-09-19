import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-primary-school',
  templateUrl: './primary-school.component.html',
  styleUrls: ['./primary-school.component.scss']
})
export class PrimarySchoolComponent implements OnInit {

  educationModel:EducationInfo=new EducationInfo();
  constructor() { }

  ngOnInit(): void {
  }

}
