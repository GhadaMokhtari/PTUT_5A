import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toilette',
  templateUrl: './toilette.component.html',
  styleUrls: ['./toilette.component.scss']
})
export class ToiletteComponent implements OnInit {

  toilette = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
