import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PostgraduateDegreeComponent} from "../../../modals/postgraduate-degree/postgraduate-degree.component";
import {EducationInfo, PostDegreeInfo} from "../../../../Services/EducationInfo/education-info.model";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-post-degree-school',
  templateUrl: './post-degree-school.component.html',
  styleUrls: ['./post-degree-school.component.scss']
})
export class PostDegreeSchoolComponent implements OnInit {
  PostDegreeList:PostDegreeInfo[];
  educationModel:EducationInfo=new EducationInfo();
  postDegreeModel:PostDegreeInfo=new PostDegreeInfo();
  constructor(public dialog: MatDialog,
              private educationService:EducationInfoService) { }

  ngOnInit(): void {
    this.educationService.getPostDegreeList().then(res=>this.PostDegreeList=res as PostDegreeInfo[])
  }

  openPostDegreeDialog(AssociateModalIndex,AssociateId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={AssociateModalIndex,AssociateId}
    this.dialog.open(PostgraduateDegreeComponent);
  }
}
