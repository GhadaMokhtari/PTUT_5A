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
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  Non: boolean;
  modalite: string;
  commDistAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.commDistAdverbes = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
      adverbesSubscribe.unsubscribe();
    });
  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('comm dist modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.commDistAdverbes);
    this.commDistToGrilleEvent.emit(true);
  }
}
