import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WorkmodalComponent} from "../../modals/workmodal/workmodal.component";
@Component({
  selector: 'app-postworkform',
  templateUrl: './postworkform.component.html',
  styleUrls: ['./postworkform.component.scss']
})
export class PostworkformComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  openWorkModal(){
    this.dialog.open(WorkmodalComponent);
  }
  ngOnInit(): void {
  }

}
