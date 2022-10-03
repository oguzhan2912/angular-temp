import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {departmentAssociate} from "../../../../Data/Education/associatestore";
import {schools} from "../../../../Data/Education/educationstore";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";
import {states} from "../../../../Data/Education/eduState";

@Component({
  selector: 'app-associate-school',
  templateUrl: './associate-school.component.html',
  styleUrls: ['./associate-school.component.scss']
})
export class AssociateSchoolComponent implements OnInit {
  associateForm:FormGroup;
  educationModel:EducationInfo=new EducationInfo();
  public departmentAssociate:any=departmentAssociate;
  public schools:any=schools;
  public states:any=states;
  constructor(private associateService:EducationInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
  }
  createNewForm(){
    this.associateForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        schoolDepartment:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        schoolGPA:new FormControl("",[Validators.required,]),
        schoolState:new FormControl("",[Validators.required,]),
        newSchool:new FormControl("",[Validators.required,]),
        newDepartment:new FormControl("",[]),
        gradeLevel:new FormControl(1,[]),
      }
    )
  }

  save(){
    this.associateService.add(this.associateForm.value).subscribe({
      next:(res)=>this.associateService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.associateForm.value);
    //this.createNewForm();

  }
}
