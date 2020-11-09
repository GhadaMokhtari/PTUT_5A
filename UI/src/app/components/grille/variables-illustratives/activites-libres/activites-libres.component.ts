import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-activites-libres',
  templateUrl: './activites-libres.component.html',
  styleUrls: ['./activites-libres.component.scss']
})
export class ActivitesLibresComponent implements OnInit {

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
    this.modalite = 'C';
    console.log('actLibres modalité', this.modalite);
    this.finalResultEvent.emit(this.modalite);
  }
}
