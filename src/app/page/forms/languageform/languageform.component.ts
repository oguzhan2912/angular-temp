import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LanguaeModalComponent} from "../../modals/languae-modal/languae-modal.component";
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";
import {LanguageItemModel} from "../../../Services/LanguageInfo/language-item/language-item.model";

@Component({
  selector: 'app-languageform',
  templateUrl: './languageform.component.html',
  styleUrls: ['./languageform.component.scss']
})
export class LanguageformComponent implements OnInit {


  languageModel: LanguageInfo=new LanguageInfo();
  languageItemModel:Array<LanguageItemModel>=new Array<LanguageItemModel>();


  constructor(public dialog: MatDialog,
              private languageService:LanguageInfoService,) { }

  ngOnInit(): void {

  }




  openLanguageModal(languageItemModelIndex,languageID):void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { languageItemModelIndex, languageID };

    this.dialog.open(LanguaeModalComponent,dialogConfig);
  }
}
