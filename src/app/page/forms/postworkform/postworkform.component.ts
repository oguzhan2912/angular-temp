import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input() workList: PostworkInfo[] = []
  @Output() myDeleteEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog,private workService:PostworkInfoService,) { }


  ngOnInit(): void {
    this.WorkList=this.workService.postWorkModel;
    this.RefreshToList();
  }

  openWorkModal(WorkModalIndex,PostWorkId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { WorkModalIndex, PostWorkId };
    this.dialog.open(WorkmodalComponent,dialogConfig);
  }

  RefreshToList(){
    this.workService.getList().subscribe({
      next: (res)=>this.WorkList=res as PostworkInfo[],
      error:(err)=>console.log(err)
    })
  }
  deleteRecord(model:PostworkInfo){
    this.myDeleteEvent.emit(model);
  }
}
