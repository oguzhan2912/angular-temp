import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SkillmodalComponent} from "../../modals/skillmodal/skillmodal.component";

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

  @Input() skillList: SkillInfo[] = []
  @Output() myDeleteEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog,private skillService:SkillInfoService,) { }

  ngOnInit(): void {
    this.SkillList=this.skillService.skillModel;
    this.RefreshToList();
  }

  openSkillModal(SkillModalIndex,SkillId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { SkillModalIndex, SkillId };
    this.dialog.open(SkillmodalComponent,dialogConfig);
  }

  RefreshToList(){
    this.skillService.getList().subscribe({
      next: (res)=>this.SkillList=res as SkillInfo[],
      error:(err)=>console.log(err)
    })
  }
  deleteRecord(model:SkillInfo){
    this.myDeleteEvent.emit(model);
  }
}
