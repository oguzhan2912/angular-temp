import { Component, OnInit } from '@angular/core';
import {PostworkInfo} from "../../../Services/PostWorkInfo/postwork-info.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-workmodal',
  templateUrl: './workmodal.component.html',
  styleUrls: ['./workmodal.component.scss']
})
export class WorkmodalComponent implements OnInit {

  postWorkModel: PostworkInfo=new PostworkInfo();
  disableSelectWork = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
