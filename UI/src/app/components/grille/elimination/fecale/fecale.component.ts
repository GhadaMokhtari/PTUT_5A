import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-fecale',
  templateUrl: './fecale.component.html',
  styleUrls: ['./fecale.component.scss']
})
export class FecaleComponent implements OnInit {

  @Output() fecaleToEliminationEvent = new EventEmitter<boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();
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
    console.log('elimi fecale modalité', this.modalite);
    this.resultEmitEvent.emit(this.modalite);
    this.fecaleToEliminationEvent.emit(true);
  }

}
