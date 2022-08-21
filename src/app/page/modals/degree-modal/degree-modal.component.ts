import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EducationInfo} from "../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html',
  styleUrls: ['./degree-modal.component.scss']
})
export class DegreeModalComponent implements OnInit {

  educationModel: EducationInfo=new EducationInfo();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
