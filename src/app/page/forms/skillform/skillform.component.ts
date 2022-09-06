import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SkillmodalComponent} from "../../modals/skillmodal/skillmodal.component";
import {years} from "../../../Data/Skills/yearsstore";
import {SkillInfo} from "../../../Services/SkillInfo/skill-info.model";
import {SkillInfoService} from "../../../Services/SkillInfo/skill-info.service";


@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.scss']
})
export class SkillformComponent implements OnInit {

  SkillList: SkillInfo[];
  SkillModal:SkillInfo=new SkillInfo();

  constructor(public dialog: MatDialog,private SkillService:SkillInfoService,) { }




  openSkillModal(SkillModalIndex,SkillId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { SkillModalIndex, SkillId };
    this.dialog.open(SkillmodalComponent,dialogConfig);
  }
  ngOnInit(): void {
    this.SkillService.getItemList().then(res=>this.SkillList=res as SkillInfo[])
  }

}
