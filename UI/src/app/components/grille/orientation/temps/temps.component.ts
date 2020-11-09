import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-temps',
  templateUrl: './temps.component.html',
  styleUrls: ['./temps.component.scss']
})
export class TempsComponent implements OnInit {

  @Output() tempsToOrientationEvent = new EventEmitter <boolean>();
  @Output() resultEmitEvent = new EventEmitter<string>();

  Non: boolean;
  modalite: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
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
    console.log('orientation temps modalité', this.modalite);
    this.resultEmitEvent.emit(this.modalite);
    this.tempsToOrientationEvent.emit(true);
  }

}
