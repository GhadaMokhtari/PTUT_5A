import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../modal-oui/modal-oui';

@Component({
  selector: 'app-deplacements-exterieurs',
  templateUrl: './deplacements-exterieurs.component.html',
  styleUrls: ['./deplacements-exterieurs.component.scss']
})
export class DeplacementsExterieursComponent implements OnInit {

  @Output() exterieursToGrilleEvent = new EventEmitter<boolean>();
  exterieur = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.exterieur = true;
  }
  goToTabs(): void{
    this.exterieursToGrilleEvent.emit(true);
  }
}
