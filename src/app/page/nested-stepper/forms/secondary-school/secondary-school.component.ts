import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-secondary-school',
  templateUrl: './secondary-school.component.html',
  styleUrls: ['./secondary-school.component.scss']
})
export class SecondarySchoolComponent implements OnInit {
  secondaryForm:FormGroup;
  constructor(private secondaryService:EducationInfoService) { }
  educationModel:EducationInfo=new EducationInfo();
  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.secondaryForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        gradeLevel:new FormControl(1,[Validators.required,]),
      }
    )
  }

  save(){
    this.secondaryService.add(this.secondaryForm.value).subscribe({
      next:(res)=>this.secondaryService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.secondaryForm.value);
    //this.createNewForm();

  }
}
