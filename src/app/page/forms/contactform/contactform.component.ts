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

  constructor(private service: ContactInfoService) {
    this.countries = this.service.getCountries();
    this.form = new FormGroup({
      country: this.country,
      state: this.state,
      city: this.city,
    }); }

  ngOnInit() {
    this.country.valueChanges.subscribe((country) => {
      this.state.reset();
      this.state.disable();
      if (country) {
        this.states = this.service.getStatesByCountry(country);
        this.state.enable();
      }
    });

    this.state.valueChanges.subscribe((state) => {
      this.city.reset();
      this.city.disable();
      if (state) {
        this.cities = this.service.getCitiesByState(this.country.value!, state);
        this.city.enable();
      }
    });
  }
}
