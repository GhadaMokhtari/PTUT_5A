import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-suivi-traitement',
  templateUrl: './suivi-traitement.component.html',
  styleUrls: ['./suivi-traitement.component.scss']
})
export class SuiviTraitementComponent implements OnInit {

  @Output() suiviToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  suiviTraitAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.suiviTraitAdverbes = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
      adverbesSubscribe.unsubscribe();

      console.log(result);
      if (result === 'close-for-validation'){
        this.goToTabs();
      }
    });
  }

  goToTabs(): void{
    this.finalResultEvent.emit(this.modalite);
    this.adverbesEmitEvent.emit(this.suiviTraitAdverbes);
    this.suiviToGrilleEvent.emit(true);
  }
  goToTabsC(): void{
    this.finalResultEvent.emit('C');
    this.suiviToGrilleEvent.emit(true);
  }
}
