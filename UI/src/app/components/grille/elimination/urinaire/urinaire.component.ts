import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-urinaire',
  templateUrl: './urinaire.component.html',
  styleUrls: ['./urinaire.component.scss']
})
export class UrinaireComponent implements OnInit {

  @Output() urinaireToFecaleEvent = new EventEmitter<boolean>();
  urinaire = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.urinaire = true;
  }
  goToTabs(): void{
    this.urinaireToFecaleEvent.emit(true);
  }

}
