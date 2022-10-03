import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-high-school',
  templateUrl: './high-school.component.html',
  styleUrls: ['./high-school.component.scss']
})
export class HighSchoolComponent implements OnInit {
  highForm:FormGroup;
  educationModel:EducationInfo=new EducationInfo();
  constructor(private highService:EducationInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
  }
  createNewForm(){
    this.highForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        gradeLevel:new FormControl(1,[Validators.required,]),
        schoolGPA:new FormControl("",[Validators.required,]),
      }
    )
  }

  save(){
    this.highService.add(this.highForm.value).subscribe({
      next:(res)=>this.highService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.highForm.value);
    //this.createNewForm();

  }
}
