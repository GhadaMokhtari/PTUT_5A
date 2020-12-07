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
    this.finalResultEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.depInterAdverbes);
    this.interieursTogrille.emit(true);
  }

  goToTabsC(): void{
    this.finalResultEvent.emit('C');
    this.interieursTogrille.emit(true);
  }
}
