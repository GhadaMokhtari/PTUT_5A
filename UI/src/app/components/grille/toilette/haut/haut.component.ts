import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.scss']
})
export class HautComponent implements OnInit {

  @Output() toiletteHautToBasEvent = new EventEmitter<boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  tHautAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.tHautAdverbes = data;
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
    this.adverbesEmitEvent.emit(this.tHautAdverbes);
    this.toiletteHautToBasEvent.emit(true);
  }

  goToTabsC(): void{
    this.resultEmitEvent.emit('C');
    this.toiletteHautToBasEvent.emit(true);
  }
}
