import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-manger',
  templateUrl: './manger.component.html',
  styleUrls: ['./manger.component.scss']
})
export class MangerComponent implements OnInit {

  manger = false;
  @Output() mangerToAlimentationEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    // this.dialog.open(ModalOui);
    const dialogRef = this.dialog.open(ModalOui);
    this.manger = true;
  }
  goToTabs(): void{
    this.mangerToAlimentationEvent.emit(true);
  }
}
