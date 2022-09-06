import {Component, Inject, OnInit} from '@angular/core';
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";
import{MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import {LanguageItemModel} from "../../../Services/LanguageInfo/language-item/language-item.model";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";
import {languages} from "../../../Data/Languages/language-store/language-store.component";
import {readings} from "../../../Data/Languages/Reading/readingstore";
import {writings} from "../../../Data/Languages/Writing/writingstore";
import {understandings} from "../../../Data/Languages/Understanding/understandingstore";
import {speakings} from "../../../Data/Languages/Speaking/speakingstore";
import {exams} from "../../../Data/Languages/Exam/examstore";

import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-languae-modal',
  templateUrl: './languae-modal.component.html',
  styleUrls: ['./languae-modal.component.scss']
})
export class LanguaeModalComponent implements OnInit {

  formData:LanguageInfo;
  languageModel: LanguageInfo=new LanguageInfo();
  LanguageList:LanguageInfo[];
  public languages:any=languages;
  public readings:any=readings;
  public writings:any=writings;
  public understandings:any=understandings;
  public speakings:any=speakings;
  public exams:any=exams;
  public averageLvl:number;

  languageItemModel:Array<LanguageInfo>=new Array<LanguageInfo>();


    constructor(@Inject(MAT_DIALOG_DATA)public data,
              public dialogRef:MatDialogRef<LanguaeModalComponent>,
              private languagesService:LanguageInfoService) { }



  /*resetForm(form?:NgForm ){
    //if(form = null)
      //form.resetForm();
    this.languageModel={
      LanguageID:0,
      LanguageName:"",
      WritingLvl:0,
      ReadingLvl:0,
      UnderstandingLvl:0,
      SpeakingLvl:0,
      LanguageExam:"",
      ExamResult:0
    };
    this.languageItemModel=[];

  }*/

  onSubmit(form: NgForm) {
    this.languagesService.saveLanguage(this.languageModel).subscribe();
  }


  ngOnInit(): void {

  }
}
