import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-hab-moyen',
  templateUrl: './hab-moyen.component.html',
  styleUrls: ['./hab-moyen.component.scss']
})
export class HabMoyenComponent implements OnInit {


  @Output() habillageMoyenToBasEvent = new EventEmitter<boolean>();
  habillageMoyen = false;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }


  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.habillageMoyen = true;
  }
  goToTabs(): void{
    this.habillageMoyenToBasEvent.emit(true);
  }

}
