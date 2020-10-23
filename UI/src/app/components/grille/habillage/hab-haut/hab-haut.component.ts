<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-hab-haut',
  templateUrl: './hab-haut.component.html',
  styleUrls: ['./hab-haut.component.scss']
})
export class HabHautComponent implements OnInit {

<<<<<<< HEAD
  habillageDuHaut = false;
  @Output() habillageHautToMoyenEvent = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageDuHaut = true;
  }
  goToTabs(): void{
    this.habillageHautToMoyenEvent.emit(true);
  }

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
