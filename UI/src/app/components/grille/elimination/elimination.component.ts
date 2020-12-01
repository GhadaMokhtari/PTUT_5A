import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-elimination',
  templateUrl: './elimination.component.html',
  styleUrls: ['./elimination.component.scss']
})
export class EliminationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

  @Output() eliminationToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() eliminationValeursToGrille = new EventEmitter();
  finalResult: string;
  eliminationValeurs = {
    resultFecale: '',
    resultUrine: '',
    resultAdverbesFecale: '',
    resultAdverbesUrinaire: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  fecaleResult(event: string): void {
   this.eliminationValeurs.resultFecale = event;
  }
  urineResult(event: string): void {
    this.eliminationValeurs.resultUrine = event;
  }
  adverbesResultFecale(event: any): void{
    this.eliminationValeurs.resultAdverbesFecale = event;
  }
  adverbesResultUrinaire(event: any): void{
    this.eliminationValeurs.resultAdverbesUrinaire = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.eliminationValeurs.resultUrine === 'A' && this.eliminationValeurs.resultFecale === 'A'){
      this.finalResult = 'A';
    } else if (this.eliminationValeurs.resultUrine === 'C' && this.eliminationValeurs.resultFecale === 'C'){
      this.finalResult = 'C';
    } else if (this.eliminationValeurs.resultUrine === 'A' && this.eliminationValeurs.resultFecale === 'C'){
      this.finalResult = 'C';
    } else if (this.eliminationValeurs.resultUrine === 'C' && this.eliminationValeurs.resultFecale === 'A'){
      this.finalResult = 'C';
    } else if (this.eliminationValeurs.resultUrine === 'C' && this.eliminationValeurs.resultFecale === 'B'){
      this.finalResult = 'C';
    } else if (this.eliminationValeurs.resultUrine === 'B' && this.eliminationValeurs.resultFecale === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.eliminationValeursToGrille.emit(this.eliminationValeurs);
    this.eliminationToGrilleEvent.emit(true);
  }
}
