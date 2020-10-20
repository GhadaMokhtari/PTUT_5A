import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CoherenceOuiComponent} from '../coherence-oui/coherence-oui.component';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();
  coherence = true;

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
