import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {schools} from "../../../../Data/Education/educationstore";
import {states} from "../../../../Data/Education/eduState";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-phd-school',
  templateUrl: './phd-school.component.html',
  styleUrls: ['./phd-school.component.scss']
})
export class PhdSchoolComponent implements OnInit {
  phDForm:FormGroup;
  educationModel:EducationInfo=new EducationInfo();
  public schools:any=schools;
  public states:any= states;
  constructor(private phDService:EducationInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
  }
  createNewForm(){
    this.phDForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        schoolDepartment:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        schoolGPA:new FormControl("",[Validators.required,]),
        schoolState:new FormControl("",[Validators.required,]),
        newSchool:new FormControl("",[]),
        newDepartment:new FormControl("",[]),
        gradeLevel:new FormControl(7,[Validators.required,]),
      }
    )
  }

  save(){
    this.phDService.add(this.phDForm.value).subscribe({
      next:(res)=>this.phDService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.phDForm.value);
    //this.createNewForm();

  }
}
