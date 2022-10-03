import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {departmentsDegree} from "../../../Data/Education/departmentstore";
import {schools} from "../../../Data/Education/educationstore";
import {states} from "../../../Data/Education/eduState";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html',
  styleUrls: ['./degree-modal.component.scss']
})
export class DegreeModalComponent implements OnInit {
  degreeForm:FormGroup;

  public departmentsDegree:any=departmentsDegree;
  public schools:any=schools;
  public states:any=states;
  constructor(public dialog: MatDialog,
              private degreeService:EducationInfoService,
              public dialogRef:MatDialogRef<DegreeModalComponent>) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.degreeForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        schoolDepartment:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        schoolGPA:new FormControl("",[Validators.required,]),
        schoolState:new FormControl("",[Validators.required,]),
        newSchool:new FormControl("",[Validators.required,]),
        newDepartment:new FormControl("",[Validators.required,]),
        gradeLevel:new FormControl(5,[]),
      }
    )
  }

  save(){
    this.degreeService.add(this.degreeForm.value).subscribe({
      next:(res)=>this.degreeService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.degreeForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }

}
