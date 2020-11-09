import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../modal-oui/modal-oui';

@Component({
  selector: 'app-communication-distance',
  templateUrl: './communication-distance.component.html',
  styleUrls: ['./communication-distance.component.scss']
})
export class CommunicationDistanceComponent implements OnInit {

  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() commDistToGrilleEvent = new EventEmitter<boolean>();
  Non: boolean;
  modalite: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });
  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('comm dist modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.commDistToGrilleEvent.emit(true);
  }
}
