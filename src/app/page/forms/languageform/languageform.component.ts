import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LanguaeModalComponent} from "../../modals/languae-modal/languae-modal.component";

@Component({
  selector: 'app-languageform',
  templateUrl: './languageform.component.html',
  styleUrls: ['./languageform.component.scss']
})
export class LanguageformComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  openLanguageModal() {
    this.dialog.open(LanguaeModalComponent);
  }

  ngOnInit(): void {
  }

}
