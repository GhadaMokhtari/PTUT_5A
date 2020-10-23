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
  fecale = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.fecale = true;
  }
  goToTabs(): void{
    this.fecaleToEliminationEvent.emit(true);
  }

}
