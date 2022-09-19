import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DegreeModalComponent} from "../modals/degree-modal/degree-modal.component";
import {DegreeInfo, EducationInfo, PostDegreeInfo} from "../../Services/EducationInfo/education-info.model";
import {departmentAssociate} from "../../Data/Education/associatestore";
import {departmentsDegree} from "../../Data/Education/departmentstore";
import {schools} from "../../Data/Education/educationstore";
import {PostgraduateDegreeComponent} from "../modals/postgraduate-degree/postgraduate-degree.component";
import {EducationInfoService} from "../../Services/EducationInfo/education-info.service";


@Component({
  selector: 'app-nested-stepper',
  templateUrl: './nested-stepper.component.html',
  styleUrls: ['./nested-stepper.component.scss']
})
export class NestedStepperComponent implements OnInit {
  educationModel:EducationInfo=new EducationInfo();
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,
              private educationService:EducationInfoService) { }

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

  ngOnInit(): void { }

}
