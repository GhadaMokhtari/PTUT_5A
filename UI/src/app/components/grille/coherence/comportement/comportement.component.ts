import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-comportement',
  templateUrl: './comportement.component.html',
  styleUrls: ['./comportement.component.scss']
})
export class ComportementComponent implements OnInit {

  @Output() comportementToCoherenceEvent = new EventEmitter<boolean>();
  @Output() resultEventEmitter = new EventEmitter<string>();
  Non: boolean;
  modalite: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
      // console.log('dialog comportement', this.modalite);
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
    console.log('comportement modalité', this.modalite);
    this.resultEventEmitter.emit(this.modalite);
    this.comportementToCoherenceEvent.emit(true);
  }

}
