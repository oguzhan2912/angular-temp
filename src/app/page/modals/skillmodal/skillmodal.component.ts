import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {SkillInfoService} from "../../../Services/SkillInfo/skill-info.service";

@Component({
  selector: 'app-skillmodal',
  templateUrl: './skillmodal.component.html',
  styleUrls: ['./skillmodal.component.scss']
})
export class SkillmodalComponent implements OnInit {

  skillForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              private skillService:SkillInfoService,
              public dialogRef:MatDialogRef<SkillmodalComponent>) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.skillForm=new FormGroup(
      {
        skillName:new FormControl("",[Validators.required,]),
      }
    )
  }

  save(){
    this.skillService.add(this.skillForm.value).subscribe({
      next:(res)=>this.skillService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.skillForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }
}
