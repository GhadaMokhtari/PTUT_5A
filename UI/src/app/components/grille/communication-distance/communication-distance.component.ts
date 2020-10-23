import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../modal-oui/modal-oui';

@Component({
  selector: 'app-communication-distance',
  templateUrl: './communication-distance.component.html',
  styleUrls: ['./communication-distance.component.scss']
})
export class CommunicationDistanceComponent implements OnInit {

  commDist = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.commDist = true;
  }
}
