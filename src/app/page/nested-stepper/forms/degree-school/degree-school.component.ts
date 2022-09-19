import { Component, OnInit } from '@angular/core';
import {DegreeInfo} from "../../../../Services/EducationInfo/education-info.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DegreeModalComponent} from "../../../modals/degree-modal/degree-modal.component";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-degree-school',
  templateUrl: './degree-school.component.html',
  styleUrls: ['./degree-school.component.scss']
})
export class DegreeSchoolComponent implements OnInit {
  DegreeList:DegreeInfo[];
  degreeModel: DegreeInfo=new DegreeInfo();
  constructor(private educationService:EducationInfoService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.educationService.getDegreeList().then(res=>this.DegreeList=res as DegreeInfo[])
  }
  openDialog(DegreeModalIndex,DegreeId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "200%";
    dialogConfig.data = {DegreeModalIndex, DegreeId}
    this.dialog.open(DegreeModalComponent, dialogConfig);
  }
}
