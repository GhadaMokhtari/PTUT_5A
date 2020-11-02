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
  resultCommunication: string;
  resultComportment: string;
  finalModalite: string;

  @Output() coherenceToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  commResult(event: string): void {
    this.resultCommunication = event;
    console.log('cohérence comm', this.resultCommunication);
  }
  comportResult(event: string): void {
    this.resultComportment = event;
    console.log('Cohérence comport', this.resultComportment);
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultCommunication === 'A' && this.resultComportment === 'A'){
      this.finalModalite = 'A';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'A' && this.resultComportment === 'B'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'B' && this.resultComportment === 'A'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'B' && this.resultComportment === 'B'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'C' && this.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'B' && this.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'C' && this.resultComportment === 'B'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'A' && this.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.resultCommunication === 'C' && this.resultComportment === 'A'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    this.finalResultEvent.emit(this.finalModalite);
    this.coherenceToGrilleEvent.emit(true);
  }
}
