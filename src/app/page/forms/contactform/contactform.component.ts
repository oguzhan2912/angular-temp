import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ContactInfoService} from "../../../Services/ContactInfo/contact-info.service";
import {ErrorStateMatcher} from "@angular/material/core";


interface Country {
  shortName: string;
  name: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {


  contactForm:FormGroup;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  countries: Country[];
  states: string[];
  cities: string[];

  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  address=new FormControl("",[Validators.required,]);
  workPhone=new FormControl("",[Validators.required,]);
  cellPhone=new FormControl("",[Validators.required,]);
  homePhone=new FormControl("",[Validators.required,]);
  cellPhone2=new FormControl("",[Validators.required,]);
  mailAdress=new FormControl("",[Validators.required,]);
  goal=new FormControl("",[Validators.required,]);
  position=new FormControl("",[Validators.required,]);
  salaryExp=new FormControl("",[Validators.required,]);
  general =new FormControl("",[Validators.required,]);



  constructor(private contactService: ContactInfoService) {
    this.countries = this.contactService.getCountries();
    this.form = new FormGroup({
      country: this.country,
      state: this.state,
      city: this.city,
      address:this.address,
      workPhone:this.workPhone,
      cellPhone:this.cellPhone,
      cellPhone2:this.cellPhone2,
      homePhone:this.homePhone,
      mailAdress:this.mailAdress,
      goal:this.goal,
      position:this.position,
      salaryExp:this.salaryExp,
      general:this.general,
    });
  }

  ngOnInit() {
    this.country.valueChanges.subscribe((country) => {
      this.state.reset();
      this.state.disable();
      if (country) {
        this.states = this.contactService.getStatesByCountry(country);
        this.state.enable();
      }
    });

    this.state.valueChanges.subscribe((state) => {
      this.city.reset();
      this.city.disable();
      if (state) {
        this.cities = this.contactService.getCitiesByState(this.country.value!, state);
        this.city.enable();
      }
    });
    this.createNewForm();
  }

  createNewForm(){
    /*
    this.contactForm=new FormGroup(
      {
        address:new FormControl("",[Validators.required,]),
        workPhone:new FormControl("",[Validators.required,]),
        cellPhone:new FormControl("",[Validators.required,]),
        homePhone:new FormControl("",[Validators.required,]),
        cellPhone2:new FormControl("",[Validators.required,]),
        mailAdress:new FormControl("",[Validators.required,]),
        goal:new FormControl("",[Validators.required,]),
        position:new FormControl("",[Validators.required,]),
        salaryExp:new FormControl("",[Validators.required,]),
        general :new FormControl("",[Validators.required,]),
      }
    )*/
  }

  save(){
    /*
    this.contactService.add(this.contactForm.value).subscribe({
      next:(res)=>this.contactService.getList(),
      error:(err)=>console.log(err)
    })*/

    this.contactService.add(this.form.value).subscribe({
      next:(res)=>this.contactService.getList(),
      error:(err)=>console.log(err)
    })
    console.warn(this.form.value);
    this.createNewForm();
  }
}
