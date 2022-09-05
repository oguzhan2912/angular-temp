import { Component, OnInit } from '@angular/core';
import {SkillInfo} from "../../../Services/SkillInfo/skill-info.model";
import {years} from "../../../Data/Skills/yearsstore";

@Component({
  selector: 'app-skillmodal',
  templateUrl: './skillmodal.component.html',
  styleUrls: ['./skillmodal.component.scss']
})
export class SkillmodalComponent implements OnInit {
  skillModel: SkillInfo= new SkillInfo();
  public years:any=years;
  constructor() { }

  ngOnInit(): void {
  }

}
