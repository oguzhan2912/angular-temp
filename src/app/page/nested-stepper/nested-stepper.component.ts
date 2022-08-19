import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {DegreeModalComponent} from "../modals/degree-modal/degree-modal.component";
import {EducationInfo} from "../../Services/EducationInfo/education-info.model";


@Component({
  selector: 'app-nested-stepper',
  templateUrl: './nested-stepper.component.html',
  styleUrls: ['./nested-stepper.component.scss']
})
export class NestedStepperComponent implements OnInit {

  educationModel:EducationInfo=new EducationInfo();

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }

  /* ------------------------Stepper2 ----------------------*/
  firstForm2Group = this._formBuilder.group({
    firstForm2Group: ['', Validators.required],
  });
  secondForm2Group = this._formBuilder.group({
    secondForm2Group: ['', Validators.required],
  });
  thirdForm2Group = this._formBuilder.group({
    thirdForm2Group: ['', Validators.required],
  });
  fourthForm2Group = this._formBuilder.group({
    fourthForm2Group: ['', Validators.required],
  });
  fifthForm2Group = this._formBuilder.group({
    fifthForm2Group: ['', Validators.required],
  });
  sixthForm2Group = this._formBuilder.group({
    sixthForm2Group: ['', Validators.required],
  });
  seventhForm2Group = this._formBuilder.group({
    seventhForm2Group: ['', Validators.required],
  });





  isLinear = false;
  openDialog() {
    this.dialog.open(DegreeModalComponent);
  }
  ngOnInit(): void {
  }

}
