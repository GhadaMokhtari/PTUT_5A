import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-coherence',
  templateUrl: './coherence.component.html',
  styleUrls: ['./coherence.component.scss']
})
export class CoherenceComponent implements OnInit {

  selected = 0;
  finalModalite: string;
  coherenceValeurs = {
    resultCommunication: '',
    resultComportment: '',
    resultAdverbesComm: '',
    resultAdverbesComp: ''
  };

  @Output() coherenceToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() coherenceValeursToGrille = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  commResult(event: string): void {
    this.coherenceValeurs.resultCommunication = event;
  }
  comportResult(event: string): void {
    this.coherenceValeurs.resultComportment = event;
  }
  adverbesCommResults(event: any): void{
    this.coherenceValeurs.resultAdverbesComm = event;
  }
  adverbesCompResults(event: any): void{
    this.coherenceValeurs.resultAdverbesComp = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    console.log(typeof this.coherenceValeurs.resultComportment);
    if (this.coherenceValeurs.resultCommunication === 'A' && this.coherenceValeurs.resultComportment === 'A'){
      this.finalModalite = 'A';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'A' && this.coherenceValeurs.resultComportment === 'B'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'B' && this.coherenceValeurs.resultComportment === 'A'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'B' && this.coherenceValeurs.resultComportment === 'B'){
      this.finalModalite = 'B';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'C' && this.coherenceValeurs.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'B' && this.coherenceValeurs.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'C' && this.coherenceValeurs.resultComportment === 'B'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'A' && this.coherenceValeurs.resultComportment === 'C'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }
    if (this.coherenceValeurs.resultCommunication === 'C' && this.coherenceValeurs.resultComportment === 'A'){
      this.finalModalite = 'C';
      console.log('cohérence modalité', this.finalModalite);
    }

    this.finalResultEvent.emit(this.finalModalite);
    this.coherenceValeursToGrille.emit(this.coherenceValeurs);
    this.coherenceToGrilleEvent.emit(true);
  }
}
