import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ReferanceModalComponent} from "../../modals/referance-modal/referance-modal.component";

@Component({
  selector: 'app-referanceform',
  templateUrl: './referanceform.component.html',
  styleUrls: ['./referanceform.component.scss']
})
export class ReferanceformComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  openReferanceModal(){
    this.dialog.open(ReferanceModalComponent);
  }

  ngOnInit(): void {
  }

}
