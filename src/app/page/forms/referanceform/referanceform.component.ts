import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ReferanceModalComponent} from "../../modals/referance-modal/referance-modal.component";
import {ReferanceInfo} from "../../../Services/ReferanceInfo/referance-info.model";
import {ReferanceInfoService} from "../../../Services/ReferanceInfo/referance-info.service";
import {PostworkInfo} from "../../../Services/PostWorkInfo/postwork-info.model";

@Component({
  selector: 'app-referanceform',
  templateUrl: './referanceform.component.html',
  styleUrls: ['./referanceform.component.scss']
})
export class ReferanceformComponent implements OnInit {

  ReferanceList:ReferanceInfo[];
  referanceModal:ReferanceInfo=new ReferanceInfo();

  @Input() referanceList: ReferanceInfo[] = []
  @Output() myDeleteEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog,private referanceService:ReferanceInfoService) { }

  ngOnInit(): void {
    this.ReferanceList=this.referanceService.referanceModel;
    this.RefreshToList();
  }

  openReferanceModal(ReferanceModelIndex,ReferanceId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { ReferanceModelIndex, ReferanceId };
    this.dialog.open(ReferanceModalComponent,dialogConfig);
  }

  RefreshToList(){
    this.referanceService.getList().subscribe({
      next: (res)=>this.ReferanceList=res as ReferanceInfo[],
      error:(err)=>console.log(err)
    })
  }
  deleteRecord(model:ReferanceInfo){
    this.myDeleteEvent.emit(model);
  }
}
