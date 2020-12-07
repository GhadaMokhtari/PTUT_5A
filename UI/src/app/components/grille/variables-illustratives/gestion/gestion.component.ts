import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  @Output() gestionToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  gestionAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.gestionAdverbes = data;
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
    this.adverbesEmitEvent.emit(this.gestionAdverbes);
    this.gestionToGrilleEvent.emit(true);
  }
  goToTabsC(): void{
    this.finalResultEvent.emit('C');
    this.gestionToGrilleEvent.emit(true);
  }
}
