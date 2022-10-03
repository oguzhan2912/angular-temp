import { Component, OnInit } from '@angular/core';
import {EducationInfo} from "../../../../Services/EducationInfo/education-info.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationInfoService} from "../../../../Services/EducationInfo/education-info.service";

@Component({
  selector: 'app-primary-school',
  templateUrl: './primary-school.component.html',
  styleUrls: ['./primary-school.component.scss']
})
export class PrimarySchoolComponent implements OnInit {

  primaryForm:FormGroup;
  constructor(private primaryService:EducationInfoService) { }

  ngOnInit(): void {
    this.createNewForm();
  }
  createNewForm(){
    this.primaryForm=new FormGroup(
      {
        schoolName:new FormControl("",[Validators.required,]),
        graduationDate:new FormControl("",[Validators.required,]),
        gradeLevel:new FormControl(1,[Validators.required,]),
      }
    )

  }

  save(){
    this.primaryService.add(this.primaryForm.value).subscribe({
      next:(res)=>this.primaryService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.primaryForm.value);


  }
}
