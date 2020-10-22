import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

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
    // this.dialog.open(ModalOui);
    const dialogRef = this.dialog.open(ModalOui);
    this.coherence = true;
  }
  goToTabs(): void{
    this.comportementToCoherenceEvent.emit(true);
  }

}
