import {Component, Inject, OnInit} from '@angular/core';
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import{MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import {LanguageItemModel} from "../../../Services/LanguageInfo/language-item/language-item.model";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";

@Component({
  selector: 'app-languae-modal',
  templateUrl: './languae-modal.component.html',
  styleUrls: ['./languae-modal.component.scss']
})
export class LanguaeModalComponent implements OnInit {

  formData:LanguageInfo;
  languageItem:LanguageItemModel=new LanguageItemModel();
  languageModel: LanguageInfo=new LanguageInfo();
  LanguageList:LanguageInfo[];


    constructor(@Inject(MAT_DIALOG_DATA)public data,
              public dialogRef:MatDialogRef<LanguaeModalComponent>,
              private languagesService:LanguageInfoService) { }

  ngOnInit(): void {
    this.languagesService.getItemList().then(res=>this.LanguageList=res as LanguageInfo[]);

    if (this.data==null){
      this.formData={
        LanguageID:0,
        LanguageName:[],
        SpeakingLvl:[],
        ReadingLvl:[],
        WritingLvl:[],
        UnderstandingLvl:[],
        LanguageExam:[],
        ExamResult:0,
      }
    }else{
      this.formData=Object.assign({},this.languagesService.languageModel[this.data.languageItemModelIndex]);
    }




  }

}
