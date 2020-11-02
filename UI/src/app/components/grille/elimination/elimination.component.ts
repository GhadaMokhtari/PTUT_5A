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
  resultFecale: string;
  resultUrine: string;
  finalResult: string;


  constructor() { }

  ngOnInit(): void {
  }

  fecaleResult(event: string): void {
   this.resultFecale = event;
  }
  urineResult(event: string): void {
    this.resultUrine = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultUrine === 'A' && this.resultFecale === 'A'){
      this.finalResult = 'A';
    }
    if (this.resultUrine === 'C' && this.resultFecale === 'C'){
      this.finalResult = 'C';
    }
    if (this.resultUrine === 'A' && this.resultFecale === 'C'){
      this.finalResult = 'C';
    }
    if (this.resultUrine === 'C' && this.resultFecale === 'A'){
      this.finalResult = 'C';
    }
    if (this.resultUrine === 'C' && this.resultFecale === 'B'){
      this.finalResult = 'C';
    }
    if (this.resultUrine === 'B' && this.resultFecale === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.eliminationToGrilleEvent.emit(true);
  }
}
