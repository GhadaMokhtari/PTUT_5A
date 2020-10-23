import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ModalOui} from '../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-coherence',
  templateUrl: './coherence.component.html',
  styleUrls: ['./coherence.component.scss']
})
export class CoherenceComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

  @Output() coherenceToGrilleEvent = new EventEmitter<boolean>();
<<<<<<< HEAD
  constructor() { }
=======
  coherence = false;
  constructor(public dialog: MatDialog) { }
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  openDialog(): void{
    // this.dialog.open(ModalOui);
    const dialogRef = this.dialog.open(ModalOui);
    this.coherence = true;
  }

>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.coherenceToGrilleEvent.emit(true);
  }
}
