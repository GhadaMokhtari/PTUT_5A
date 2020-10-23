<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.scss']
})
export class HautComponent implements OnInit {

<<<<<<< HEAD
  toiletteHaut = false;
  @Output() toiletteHautToBasEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }
=======
  constructor() { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.toiletteHaut = true;
  }
  goToTabs(): void{
    this.toiletteHautToBasEvent.emit(true);
  }

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
