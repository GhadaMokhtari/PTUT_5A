import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-activites-libres',
  templateUrl: './activites-libres.component.html',
  styleUrls: ['./activites-libres.component.scss']
})
export class ActivitesLibresComponent implements OnInit {

  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  Non: boolean;
  modalite: string;
  actLibAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.actLibAdverbes = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
      adverbesSubscribe.unsubscribe();
    });
  }
  emitValeur(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('actLibres modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.actLibAdverbes);
  }
}
