import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-temps',
  templateUrl: './temps.component.html',
  styleUrls: ['./temps.component.scss']
})
export class TempsComponent implements OnInit {

  orientation = false;
  @Output() tempsToOrientationEvent = new EventEmitter <boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    // this.dialog.open(ModalOui);
    const dialogRef = this.dialog.open(ModalOui);
    this.orientation = true;
  }

  goToTabs(): void{
    this.tempsToOrientationEvent.emit(true);
  }

}
