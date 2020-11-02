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
    });  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('deplacements interieurs modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
    this.interieursTogrille.emit(true);
  }

}
