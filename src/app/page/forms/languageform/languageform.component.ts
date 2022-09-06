 import {Component, Inject, OnInit} from '@angular/core';
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


  LanguageList:LanguageInfo[];
  languageModel: LanguageInfo=new LanguageInfo();



  constructor(public dialog: MatDialog,private languageService:LanguageInfoService) { }

  ngOnInit(): void {
    this.LanguageList=this.languageService.languageModel;
    this.languageService.getItemList().then(res=>this.LanguageList=res as LanguageInfo[]);

  }






  openLanguageModal(LanguageModelIndex,LanguageId):void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { LanguageModelIndex, LanguageId };
    this.dialog.open(LanguaeModalComponent,dialogConfig);
  }


}
