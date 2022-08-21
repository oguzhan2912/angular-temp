import { Component, OnInit } from '@angular/core';
import {OtherInfo} from "../../../Services/OtherInfo/other-info.model";

@Component({
  selector: 'app-otherform',
  templateUrl: './otherform.component.html',
  styleUrls: ['./otherform.component.scss']
})
export class OtherformComponent implements OnInit {

  otherModel: OtherInfo= new OtherInfo();
  constructor() { }

  ngOnInit(): void {
  }

}
