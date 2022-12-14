import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterInfoService } from 'src/app/Services/RegisterInfo/register-info.service';




@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

  registerForm:FormGroup;
  constructor(
  private languagesService:RegisterInfoService) { }


  createNewForm(){
    this.registerForm=new FormGroup(
      {
        userName:new FormControl("",[Validators.required,]),
        password:new FormControl("",[Validators.required,]),
      
      })
  }

  ngOnInit(): void {
    this.createNewForm();
  }

  register(){
    this.languagesService.add(this.registerForm.value).subscribe({
      next:(res)=>this.languagesService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.registerForm.value);
    this.createNewForm();
    
  }

}
