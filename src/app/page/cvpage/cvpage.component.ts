import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DegreeModalComponent} from "../modals/degree-modal/degree-modal.component";
import {LanguaeModalComponent} from "../modals/languae-modal/languae-modal.component";
import {WorkmodalComponent} from "../modals/workmodal/workmodal.component";
import {ReferanceModalComponent} from "../modals/referance-modal/referance-modal.component";
import {SkillmodalComponent} from "../modals/skillmodal/skillmodal.component";

@Component({
  selector: 'app-cvpage',
  templateUrl: './cvpage.component.html',
  styleUrls: ['./cvpage.component.scss']
})
export class CvpageComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }
  public isCollapsed = false;

  selected: Date | null | undefined;






  /*---------------------------Dosya İnfo--------------------------*/

  public fileType:string[]=['Özgeçmiş','Sertifika'];




/*---------------------------Stepper --------------------*/
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ninthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  isLinear = false;
  panelOpenState = false;

  openLanguageModal() {
    this.dialog.open(LanguaeModalComponent);
  }
  openWorkModal(){
    this.dialog.open(WorkmodalComponent);
  }
  openReferanceModal(){
    this.dialog.open(ReferanceModalComponent);
  }
  openSkillModal(){
    this.dialog.open(SkillmodalComponent);
  }

  ngOnInit(): void {
  }

}
