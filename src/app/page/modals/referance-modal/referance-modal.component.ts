import { Component, OnInit } from '@angular/core';
import {ReferanceInfo} from "../../../Services/ReferanceInfo/referance-info.model";

@Component({
  selector: 'app-referance-modal',
  templateUrl: './referance-modal.component.html',
  styleUrls: ['./referance-modal.component.scss']
})
export class ReferanceModalComponent implements OnInit {

  referanceModel: ReferanceInfo=new ReferanceInfo();
  constructor() { }

  ngOnInit(): void {
  }

}
