import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss']
})
export class TemplatePageComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
  }

}
