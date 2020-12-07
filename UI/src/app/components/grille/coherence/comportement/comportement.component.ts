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
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  Non: boolean;
  modalite: string;
  compAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.compAdverbes = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
      adverbesSubscribe.unsubscribe();
      if (result === 'close-for-validation'){
        this.goToTabs();
      }
    });
  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('comportement modalité', this.modalite);
    this.resultEventEmitter.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.compAdverbes);
    this.comportementToCoherenceEvent.emit(true);
  }

}
