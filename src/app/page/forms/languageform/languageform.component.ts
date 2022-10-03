 import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LanguaeModalComponent} from "../../modals/languae-modal/languae-modal.component";
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";



@Component({
  selector: 'app-languageform',
  templateUrl: './languageform.component.html',
  styleUrls: ['./languageform.component.scss']
})
export class LanguageformComponent implements OnInit {
  isLoading: boolean = false;
  LanguageList:LanguageInfo[];
  languageModel: LanguageInfo=new LanguageInfo();
  languageModal:LanguageInfo;

  @Input() langList: LanguageInfo[] = []
  @Output() myDeleteEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog,private languageService:LanguageInfoService) { }

  ngOnInit(): void {
    this.LanguageList=this.languageService.languageModel;
    this.RefreshToList();
  }

  openLanguageModal(languageId):void {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(LanguaeModalComponent,dialogConfig);
  }
  RefreshToList(){
    this.languageService.getList().subscribe({
      next: (res)=>this.LanguageList=res as LanguageInfo[],
      error:(err)=>console.log(err)
    })
  }
  deleteRecord(model:LanguageInfo){
   this.myDeleteEvent.emit(model);
  }
}





