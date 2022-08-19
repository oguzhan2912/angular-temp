import { Component, OnInit } from '@angular/core';
import {LanguageInfo} from "../../../Services/LanguageInfo/language-info.model";

@Component({
  selector: 'app-languae-modal',
  templateUrl: './languae-modal.component.html',
  styleUrls: ['./languae-modal.component.scss']
})
export class LanguaeModalComponent implements OnInit {

  languageModel: LanguageInfo=new LanguageInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
