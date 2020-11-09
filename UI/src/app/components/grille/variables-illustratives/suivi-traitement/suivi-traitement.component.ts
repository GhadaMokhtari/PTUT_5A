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
  Non: boolean;
  modalite: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });
  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('suivi traitement modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.suiviToGrilleEvent.emit(true);
  }


}
