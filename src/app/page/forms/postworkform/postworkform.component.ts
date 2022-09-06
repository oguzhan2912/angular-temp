import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WorkmodalComponent} from "../../modals/workmodal/workmodal.component";
import {PostworkInfo} from "../../../Services/PostWorkInfo/postwork-info.model";
import {PostworkInfoService} from "../../../Services/PostWorkInfo/postwork-info.service";
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
@Component({
  selector: 'app-postworkform',
  templateUrl: './postworkform.component.html',
  styleUrls: ['./postworkform.component.scss']
})
export class PostworkformComponent implements OnInit {
  WorkList:PostworkInfo[];
  workModal:PostworkInfo=new PostworkInfo();

  constructor(public dialog: MatDialog,private workService:PostworkInfoService,) { }


  ngOnInit(): void {
    this.workService.getItemList().then(res=>this.WorkList=res as PostworkInfo[])
  }

  openWorkModal(WorkModalIndex,PostWorkId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { WorkModalIndex, PostWorkId };
    this.dialog.open(WorkmodalComponent,dialogConfig);
  }

}
