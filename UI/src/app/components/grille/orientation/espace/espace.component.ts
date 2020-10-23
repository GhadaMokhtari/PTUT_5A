import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent implements OnInit {

  orientation = false;
  @Output() espaceToOrientationEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  openDialog(): void {
=======
    openDialog(): void {
    // this.dialog.open(ModalOui);
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
    const dialogRef = this.dialog.open(ModalOui);
    this.orientation = true;
  }

  goToTabs(): void{
    this.espaceToOrientationEvent.emit(true);
  }
}
