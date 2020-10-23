import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../modal-oui/modal-oui';

@Component({
  selector: 'app-deplacements-interieurs',
  templateUrl: './deplacements-interieurs.component.html',
  styleUrls: ['./deplacements-interieurs.component.scss']
})
export class DeplacementsInterieursComponent implements OnInit {

  @Output() interieursTogrille = new EventEmitter<boolean>();
  interieur = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.interieur = true;
  }
  goToTabs(): void{
    this.interieursTogrille.emit(true);
  }

}
