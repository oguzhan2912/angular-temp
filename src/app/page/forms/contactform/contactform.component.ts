import { Component, OnInit } from '@angular/core';
import {countries} from "../../../Data/Contact/countrystore";
import {cities} from "../../../Data/Contact/citystore";
import {districts} from "../../../Data/Contact/districtstore";

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  public cities:any=cities;
  public countries:any=countries;
  public districts:any=districts;
  constructor() { }

  ngOnInit(): void {
  }

}
