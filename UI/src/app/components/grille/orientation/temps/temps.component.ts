import {Component, EventEmitter, OnInit, Output} from '@angular/core';
<<<<<<< HEAD
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from '../../modal-oui/modal-oui';
=======
import {ModalOui} from '../../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-temps',
  templateUrl: './temps.component.html',
  styleUrls: ['./temps.component.scss']
})
export class TempsComponent implements OnInit {

  orientation = false;
  @Output() tempsToOrientationEvent = new EventEmitter <boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
<<<<<<< HEAD
=======
    // this.dialog.open(ModalOui);
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
    const dialogRef = this.dialog.open(ModalOui);
    this.orientation = true;
  }

  goToTabs(): void{
    this.tempsToOrientationEvent.emit(true);
  }

}
