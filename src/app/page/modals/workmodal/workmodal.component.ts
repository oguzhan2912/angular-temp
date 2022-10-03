import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostworkInfoService} from "../../../Services/PostWorkInfo/postwork-info.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-workmodal',
  templateUrl: './workmodal.component.html',
  styleUrls: ['./workmodal.component.scss']
})
export class WorkmodalComponent implements OnInit {

  workForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              private workService:PostworkInfoService,
              public dialogRef:MatDialogRef<WorkmodalComponent>) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.workForm=new FormGroup(
      {
      companyName:new FormControl("",[Validators.required,]),
      companyDepartment:new FormControl("",[Validators.required,]),
      companyPosition:new FormControl("",[Validators.required,]),
      companyMission:new FormControl("",[Validators.required,]),
      companySalary:new FormControl("",[Validators.required,]),
      companyStartingDate:new FormControl("",[Validators.required,]),
      companyLeavingDate:new FormControl("",[Validators.required,]),
      companyLeavingReason:new FormControl("",[Validators.required,]),
      companyStillWorking:new FormControl("",[Validators.required,]),
    })
    this.enableLeavingDate();
  }
  save(){
    this.workService.add(this.workForm.value).subscribe({
      next:(res)=>this.workService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.workForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }

  enableLeavingDate(){
    this.workForm.get('companyStillWorking')?.valueChanges.subscribe(data=>{
      if(data==false){
        this.workForm.get('companyLeavingDate')?.enable();
        this.workForm.get('companyLeavingReason')?.enable();
      }else{
        this.workForm.get('companyLeavingDate')?.disable();
        this.workForm.get('companyLeavingReason')?.disable();
      }
    })
  }

}
