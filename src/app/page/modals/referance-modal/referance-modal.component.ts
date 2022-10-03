import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReferanceInfoService} from "../../../Services/ReferanceInfo/referance-info.service";

@Component({
  selector: 'app-referance-modal',
  templateUrl: './referance-modal.component.html',
  styleUrls: ['./referance-modal.component.scss']
})
export class ReferanceModalComponent implements OnInit {

  referanceForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              private referanceService:ReferanceInfoService,
              public dialogRef:MatDialogRef<ReferanceModalComponent>) { }

  ngOnInit(): void {
    this.createNewForm();
  }

  createNewForm(){
    this.referanceForm=new FormGroup(
      {
        referanceName:new FormControl("",[Validators.required,]),
        referanceFoundation:new FormControl("",[]),
        referanceEmail:new FormControl("",[Validators.required,]),
        referancePhoneNumber:new FormControl("",[Validators.required,]),
        refernacePhoneNumber2:new FormControl("",[]),
      }
    )
  }

  save(){
    this.referanceService.add(this.referanceForm.value).subscribe({
      next:(res)=>this.referanceService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.referanceForm.value);
    this.createNewForm();
    this.dialogRef.close();
  }
}
