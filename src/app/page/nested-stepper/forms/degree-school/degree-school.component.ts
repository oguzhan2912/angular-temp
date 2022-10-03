import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DegreeModalComponent} from "../../../modals/degree-modal/degree-modal.component";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";

@Component({
  selector: 'app-degree-school',
  templateUrl: './degree-school.component.html',
  styleUrls: ['./degree-school.component.scss']
})
export class DegreeSchoolComponent implements OnInit {


  DegreeList:EducationInfo[]=[];
  degreeModel: EducationInfo=new EducationInfo();

  constructor(private educationService:EducationInfoService,public dialog: MatDialog) { }

  ngOnInit(): void {
   this.DegreeList=this.educationService.educationModel;
  // this.RefreshToList();
  }
  openDialog(DegreeModalIndex,DegreeId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "200%";
    dialogConfig.data = {DegreeModalIndex, DegreeId}
    this.dialog.open(DegreeModalComponent, dialogConfig);
  }
/*
  RefreshToList(){
    this.educationService.getListByGradeLevel(5)
      .subscribe({
        next: (res)=>this.DegreeList=res.data,
        error:(err)=>console.log(err)})
  }*/

  deleteRecord(model:EducationInfo){
    //this.myDeleteEvent.emit(model);

  }
}
