 import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LanguaeModalComponent} from "../../modals/languae-modal/languae-modal.component";
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";
import {LanguageItemModel} from "../../../Services/LanguageInfo/language-item/language-item.model";
 import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-languageform',
  templateUrl: './languageform.component.html',
  styleUrls: ['./languageform.component.scss']
})
export class LanguageformComponent implements OnInit {


  languageModel: LanguageInfo=new LanguageInfo();
  languageItemModel:Array<LanguageInfo>=new Array<LanguageInfo>();




  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialog: MatDialog,
              private languageService:LanguageInfoService,) { }

  ngOnInit(): void {
  this.languageItemModel=this.languageService.languageModel;
  }







  openLanguageModal(languageItemModelIndex,languageID):void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { languageItemModelIndex, languageID };

    this.dialog.open(LanguaeModalComponent,dialogConfig);
  }


}
