import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldControl} from "@angular/material/form-field";
import {LanguageInfoService} from "../../Services/LanguageInfo/language-info.service";
import {Language} from "countrycitystatejson/src/countries-list";
import {LanguageInfo} from "../../Services/LanguageInfo/language-info.model";

@Component({
  selector: 'app-cvpage',
  templateUrl: './cvpage.component.html',
  styleUrls: ['./cvpage.component.scss']
})
export class CvpageComponent implements OnInit {

  isLinear = false;
  panelOpenState = false;
  public isCollapsed = false;

  selected: Date | null | undefined;

  languageList: LanguageInfo[]= [];

  constructor(public _formBuilder: FormBuilder,public dialog: MatDialog,private languageService: LanguageInfoService) { }


/*---------------------------Stepper --------------------*/
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    seventhCtrl: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    eightCtrl: ['', Validators.required],
  });
  ninthFormGroup = this._formBuilder.group({
    ninthCtrl: ['', Validators.required],
  });

  deleteLanguage(event:any){
    this.languageService.delete(event).subscribe({
      next:(res)=>{this.languageService.getList();},
      error:(err)=>{console.log(err);}
    })
  }



  ngOnInit(): void {
  }


}
