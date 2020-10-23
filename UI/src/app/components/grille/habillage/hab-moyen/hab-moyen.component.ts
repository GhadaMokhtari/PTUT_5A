<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-hab-moyen',
  templateUrl: './hab-moyen.component.html',
  styleUrls: ['./hab-moyen.component.scss']
})
export class HabMoyenComponent implements OnInit {

<<<<<<< HEAD
  @Output() habillageMoyenToBasEvent = new EventEmitter<boolean>();
  habillageMoyen = false;

  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageMoyen = true;
  }
  goToTabs(): void{
    this.habillageMoyenToBasEvent.emit(true);
  }
=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
