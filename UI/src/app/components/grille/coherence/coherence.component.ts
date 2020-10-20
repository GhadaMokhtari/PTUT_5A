import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CoherenceOuiComponent} from './coherence-oui/coherence-oui.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-coherence',
  templateUrl: './coherence.component.html',
  styleUrls: ['./coherence.component.scss']
})
export class CoherenceComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

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
  goToTab(tab: number): void {
    this.selected = tab;
  }
}
