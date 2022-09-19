import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ReferanceModalComponent} from "../../modals/referance-modal/referance-modal.component";
import {ReferanceInfo} from "../../../Services/ReferanceInfo/referance-info.model";
import {ReferanceInfoService} from "../../../Services/ReferanceInfo/referance-info.service";

@Component({
  selector: 'app-referanceform',
  templateUrl: './referanceform.component.html',
  styleUrls: ['./referanceform.component.scss']
})
export class ReferanceformComponent implements OnInit {

  ReferanceList:ReferanceInfo[];
  referanceModal:ReferanceInfo=new ReferanceInfo();
  constructor(public dialog: MatDialog,private referanceService:ReferanceInfoService) { }

  ngOnInit(): void {
    this.referanceService.getReferances().then(res=>this.ReferanceList=res as ReferanceInfo[])
  }

  openReferanceModal(ReferanceModelIndex,ReferanceId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { ReferanceModelIndex, ReferanceId };
    this.dialog.open(ReferanceModalComponent,dialogConfig);
  }


}
