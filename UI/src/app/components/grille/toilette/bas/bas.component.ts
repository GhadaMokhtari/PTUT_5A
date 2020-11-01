import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.scss']
})
export class BasComponent implements OnInit {

  toiletteBas = false;
  @Output() toiletteBasToToiletteEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.toiletteBas = true;
  }
  goToTabs(): void{
    this.toiletteBasToToiletteEvent.emit(true);
  }
}
