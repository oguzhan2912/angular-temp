import {Component,  Inject, OnInit} from '@angular/core';
import{MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import {LanguageInfoService} from "../../../Services/LanguageInfo/language-info.service";
import {languages} from "../../../Data/Languages/language-store/language-store.component";
import {readings} from "../../../Data/Languages/Reading/readingstore";
import {writings} from "../../../Data/Languages/Writing/writingstore";
import {understandings} from "../../../Data/Languages/Understanding/understandingstore";
import {speakings} from "../../../Data/Languages/Speaking/speakingstore";
import {exams} from "../../../Data/Languages/Exam/examstore";

import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
@Component({
  selector: 'app-languae-modal',
  templateUrl: './languae-modal.component.html',
  styleUrls: ['./languae-modal.component.scss']
})
export class LanguaeModalComponent implements OnInit {

  languageForm:FormGroup;

  public languages:any=languages;
  public readings:any=readings;
  public writings:any=writings;
  public understandings:any=understandings;
  public speakings:any=speakings;
  public exams:any=exams;
  public averageLvl:number;

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              public dialogRef:MatDialogRef<LanguaeModalComponent>,
              private languagesService:LanguageInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.languageForm=new FormGroup(
      {
        languageName:new FormControl("",[Validators.required,]),
        speakingLvl:new FormControl("",[Validators.required,]),
        readingLvl:new FormControl("",[Validators.required,]),
        writingLvl:new FormControl("",[Validators.required,]),
        understandingLvl:new FormControl("",[Validators.required,]),
        languageExam:new FormControl("",[Validators.required,]),
        examResult:new FormControl("",[Validators.required,]),
      })
  }

  save(){
    this.languagesService.add(this.languageForm.value).subscribe({
      next:(res)=>this.languagesService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.languageForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }
}
