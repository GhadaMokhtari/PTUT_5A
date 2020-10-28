import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.scss']
})
export class HautComponent implements OnInit {
  toiletteHaut = false;
  @Output() toiletteHautToBasEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }


  openDialog(): void{
    const dialogRef = this.dialog.open(ModalOui);
    this.toiletteHaut = true;
  }
  goToTabs(): void{
    this.toiletteHautToBasEvent.emit(true);
  }

}
