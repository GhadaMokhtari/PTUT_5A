import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ModalOui} from '../modal-oui/modal-oui';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-coherence',
  templateUrl: './coherence.component.html',
  styleUrls: ['./coherence.component.scss']
})
export class CoherenceComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

  @Output() coherenceToGrilleEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.coherenceToGrilleEvent.emit(true);
  }
}
