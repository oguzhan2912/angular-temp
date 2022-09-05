import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SkillmodalComponent} from "../../modals/skillmodal/skillmodal.component";
import {years} from "../../../Data/Skills/yearsstore";

@Component({
  selector: 'app-skillform',
  templateUrl: './skillform.component.html',
  styleUrls: ['./skillform.component.scss']
})
export class SkillformComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }




  openSkillModal(){
    this.dialog.open(SkillmodalComponent);
  }
  ngOnInit(): void {
  }

}
