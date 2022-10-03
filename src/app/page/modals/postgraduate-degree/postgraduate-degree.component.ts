import { Component, OnInit } from '@angular/core';
import {EducationInfo, } from "../../../Services/EducationInfo/education-info.model";
import {schools} from "../../../Data/Education/educationstore";
import {states} from "../../../Data/Education/eduState";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../Services/EducationInfo/education-info.service";
import { MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-postgraduate-degree',
  templateUrl: './postgraduate-degree.component.html',
  styleUrls: ['./postgraduate-degree.component.scss']
})
export class PostgraduateDegreeComponent implements OnInit {

  postDegreeForm:FormGroup;
  educationModel: EducationInfo=new EducationInfo();
  public schools:any=schools;
  public states:any=states;
  constructor(private postDegreeService:EducationInfoService,
              public dialogRef: MatDialogRef<PostgraduateDegreeComponent>) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.postDegreeForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        schoolDepartment:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        schoolGPA:new FormControl("",[Validators.required,]),
        schoolState:new FormControl("",[Validators.required,]),
        newSchool:new FormControl("",[Validators.required,]),
        newDepartment:new FormControl("",[Validators.required,]),
        gradeLevel:new FormControl(6,[]),
      }
    )
  }

  save(){
    this.postDegreeService.add(this.postDegreeForm.value).subscribe({
      next:(res)=>this.postDegreeService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.postDegreeForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }

}
