import { Component, OnInit } from '@angular/core';
import {SkillInfo} from "../../../Services/SkillInfo/skill-info.model";

@Component({
  selector: 'app-skillmodal',
  templateUrl: './skillmodal.component.html',
  styleUrls: ['./skillmodal.component.scss']
})
export class SkillmodalComponent implements OnInit {
  skillModel: SkillInfo= new SkillInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
