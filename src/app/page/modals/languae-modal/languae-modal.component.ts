import {Component, Inject, OnInit} from '@angular/core';
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import{MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import {LanguageItemModel} from "../../../Services/LanguageInfo/language-item/language-item.model";

@Component({
  selector: 'app-languae-modal',
  templateUrl: './languae-modal.component.html',
  styleUrls: ['./languae-modal.component.scss']
})
export class LanguaeModalComponent implements OnInit {


    languageItem:LanguageItemModel=new LanguageItemModel();
  languageModel: LanguageInfo=new LanguageInfo();

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              public dialogRef:MatDialogRef<LanguaeModalComponent>) { }

  ngOnInit(): void {
    this.languageItem={
      languageItemID:0,
      languageID: this.data.languageID,
      language:[],
      speakingLVL:[],
      readingLVL:[],
      writingLVL:[],
      understandingLVL:[],
      languageExam:[],
      examResultNumber:0,
    }



  }

}
