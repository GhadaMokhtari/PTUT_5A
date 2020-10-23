import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';

@Component({
  selector: 'app-servir',
  templateUrl: './servir.component.html',
  styleUrls: ['./servir.component.scss']
})
export class ServirComponent implements OnInit {

  servir = false;
  @Output() servirToMangerEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.servir = true;
  }
  goToTabs(): void{
    this.servirToMangerEvent.emit(true);
  }
}
