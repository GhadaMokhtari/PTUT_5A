<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.scss']
})
export class BasComponent implements OnInit {

<<<<<<< HEAD
  toiletteBas = false;
  @Output() toiletteBasToToiletteEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.toiletteBas = true;
  }
  goToTabs(): void{
    this.toiletteBasToToiletteEvent.emit(true);
  }

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
