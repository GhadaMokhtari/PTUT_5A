import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-hab-bas',
  templateUrl: './hab-bas.component.html',
  styleUrls: ['./hab-bas.component.scss']
})
export class HabBasComponent implements OnInit {

  @Output() habillageBasToHabillageEvent = new EventEmitter<boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  habBasAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.habBasAdverbes = data;
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
    this.adverbesEmitEvent.emit(this.habBasAdverbes);
    this.habillageBasToHabillageEvent.emit(true);
  }

  goToTabsC(): void{
    this.resultEmitEvent.emit('C');
    this.habillageBasToHabillageEvent.emit(true);
  }
}
