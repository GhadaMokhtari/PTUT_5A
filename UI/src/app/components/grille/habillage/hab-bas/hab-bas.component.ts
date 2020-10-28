import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';


@Component({
  selector: 'app-hab-bas',
  templateUrl: './hab-bas.component.html',
  styleUrls: ['./hab-bas.component.scss']
})
export class HabBasComponent implements OnInit {


  @Output() habillageBasToHabillageEvent = new EventEmitter<boolean>();
  habillageBas = false;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }


  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageBas = true;
  }
  goToTabs(): void{
    this.habillageBasToHabillageEvent.emit(true);
  }

}
