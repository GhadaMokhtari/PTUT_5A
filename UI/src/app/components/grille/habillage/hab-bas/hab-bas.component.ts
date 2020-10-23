<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-hab-bas',
  templateUrl: './hab-bas.component.html',
  styleUrls: ['./hab-bas.component.scss']
})
export class HabBasComponent implements OnInit {

<<<<<<< HEAD
  @Output() habillageBasToHabillageEvent = new EventEmitter<boolean>();
  habillageBas = false;

  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageBas = true;
  }
  goToTabs(): void{
    this.habillageBasToHabillageEvent.emit(true);
  }

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
