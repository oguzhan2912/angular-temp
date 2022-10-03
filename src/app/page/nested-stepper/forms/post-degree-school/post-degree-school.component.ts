import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PostgraduateDegreeComponent} from "../../../modals/postgraduate-degree/postgraduate-degree.component";
import {EducationInfo,} from "../../../../Services/EducationInfo/education-info.model";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";
import {LanguageInfo} from "../../../../Services/LanguageInfo/language-info.model";

@Component({
  selector: 'app-post-degree-school',
  templateUrl: './post-degree-school.component.html',
  styleUrls: ['./post-degree-school.component.scss']
})
export class PostDegreeSchoolComponent implements OnInit {



  PostDegreeList:EducationInfo[]=[];
  postDegreeModel:EducationInfo=new EducationInfo();
  constructor(public dialog: MatDialog,
              private educationService:EducationInfoService) { }

  ngOnInit(): void {
    this.PostDegreeList=this.educationService.educationModel;
    /*this.RefreshToList();*/
  }

  openPostDegreeDialog(AssociateModalIndex,AssociateId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={AssociateModalIndex,AssociateId}
    this.dialog.open(PostgraduateDegreeComponent);
  }
/*
  RefreshToList(){
    this.educationService.getListByGradeLevel(6).subscribe({
      next: (res)=>this.PostDegreeList=res.data,
      error:(err)=>console.log(err)
    })
  }*/
  deleteRecord(model:EducationInfo){

  }
}
