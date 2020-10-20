import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoherenceOuiComponent} from '../coherence-oui/coherence-oui.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-comportement',
  templateUrl: './comportement.component.html',
  styleUrls: ['./comportement.component.scss']
})
export class ComportementComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();
  coherence = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    // this.dialog.open(CoherenceOuiComponent);
    const dialogRef = this.dialog.open(CoherenceOuiComponent);
    this.coherence = true;
  }
  goToTabs(): void{
    this.newItemEvent.emit(true);
  }

}
