import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-hab-haut',
  templateUrl: './hab-haut.component.html',
  styleUrls: ['./hab-haut.component.scss']
})
export class HabHautComponent implements OnInit {

  habillageDuHaut = false;
  @Output() habillageHautToMoyenEvent = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageDuHaut = true;
  }
  goToTabs(): void{
    this.habillageHautToMoyenEvent.emit(true);
  }

}
