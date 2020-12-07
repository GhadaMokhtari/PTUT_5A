import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../modal-oui/modal-oui';

@Component({
  selector: 'app-deplacements-interieurs',
  templateUrl: './deplacements-interieurs.component.html',
  styleUrls: ['./deplacements-interieurs.component.scss']
})
export class DeplacementsInterieursComponent implements OnInit {

  @Output() interieursTogrille = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  Non: boolean;
  modalite: string;
  depInterAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.depInterAdverbes = data;
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
    console.log('deplacements interieurs modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.depInterAdverbes);
    this.interieursTogrille.emit(true);
  }

}
