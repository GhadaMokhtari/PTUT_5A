import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.scss']
})
export class BasComponent implements OnInit {

  @Output() toiletteBasToToiletteEvent = new EventEmitter<boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();

  modalite: string;
  Non: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
      console.log('dialog data', this.modalite);
    });

    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });  }
  goToTabs(): void{
    // @ts-ignore
    if (this.Non === 'true'){
      this.modalite = 'C';
    }
    console.log('toiletteBas modalité', this.modalite);
    this.resultEmitEvent.emit(this.modalite);
    this.toiletteBasToToiletteEvent.emit(true);
  }
}
