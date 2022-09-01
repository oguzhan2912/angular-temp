import { Component, OnInit } from '@angular/core';
import {departmentAssociate} from "../../../Data/Education/associatestore";
import {departmentsDegree} from "../../../Data/Education/departmentstore";
import {schools} from "../../../Data/Education/educationstore";

@Component({
  selector: 'app-educationform',
  templateUrl: './educationform.component.html',
  styleUrls: ['./educationform.component.scss']
})
export class EducationformComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

}
