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
  @Output() adverbesEmitEvent = new EventEmitter<any>();

  modalite: string;
  tempsAdverbes: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    const subscribeDialog = dialogRef.componentInstance.modaliteEvent.subscribe((data) => {
      this.modalite = data;
    });
    const adverbesSubscribe = dialogRef.componentInstance.adverbesEmitEvent.subscribe((data) => {
      this.tempsAdverbes = data;
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
    this.adverbesEmitEvent.emit(this.tempsAdverbes);
    this.tempsToOrientationEvent.emit(true);
  }

  goToTabsC(): void{
    this.resultEmitEvent.emit('C');
    this.tempsToOrientationEvent.emit(true);
  }

}
