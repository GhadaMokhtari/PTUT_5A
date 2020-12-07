import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-hab-haut',
  templateUrl: './hab-haut.component.html',
  styleUrls: ['./hab-haut.component.scss']
})
export class HabHautComponent implements OnInit {

  @Output() habillageHautToMoyenEvent = new EventEmitter<boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  habHautAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.habHautAdverbes = data;
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
    this.resultEmitEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.habHautAdverbes);
    this.habillageHautToMoyenEvent.emit(true);
  }

  goToTabsC(): void{
    this.resultEmitEvent.emit('C');
    this.habillageHautToMoyenEvent.emit(true);
  }
}
