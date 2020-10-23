import {Component, EventEmitter, OnInit, Output} from '@angular/core';
<<<<<<< HEAD
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';
=======
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-comportement',
  templateUrl: './comportement.component.html',
  styleUrls: ['./comportement.component.scss']
})
export class ComportementComponent implements OnInit {

  @Output() comportementToCoherenceEvent = new EventEmitter<boolean>();
  coherence = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
<<<<<<< HEAD
=======
    // this.dialog.open(ModalOui);
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
    const dialogRef = this.dialog.open(ModalOui);
    this.coherence = true;
  }
  goToTabs(): void{
    this.comportementToCoherenceEvent.emit(true);
  }

}
