import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-degree-modal',
  templateUrl: './degree-modal.component.html',
  styleUrls: ['./degree-modal.component.scss']
})
export class DegreeModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
