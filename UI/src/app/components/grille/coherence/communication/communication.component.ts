import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  @Output() communicationToCoherenceEvent = new EventEmitter<boolean>();
  coherence = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    // this.dialog.open(ModalOui);
    const dialogRef = this.dialog.open(ModalOui);
    this.coherence = true;
  }
  goToTabs(): void{
    this.communicationToCoherenceEvent.emit(true);
  }

  modality(modality: string): void{
    console.log(modality);
  }

}
