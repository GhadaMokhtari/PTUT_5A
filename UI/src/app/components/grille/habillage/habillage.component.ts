import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-habillage',
  templateUrl: './habillage.component.html',
  styleUrls: ['./habillage.component.scss']
})
export class HabillageComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  resultHabHaut: string;
  resultHabBas: string;
  resultHabMoyen: string;
  finalResult: string;
  @Output() habillageToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  habHautResult(event: string): void {
    this.resultHabHaut = event;
  }
  habBasResult(event: string): void {
    this.resultHabBas = event;
  }
  habMoyenResult(event: string): void {
    this.resultHabMoyen = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultHabHaut === 'A' && this.resultHabMoyen === 'A' && this.resultHabBas === 'A'){
      this.finalResult = 'A';
    }
    if (this.resultHabHaut === 'C' && this.resultHabMoyen === 'C' && this.resultHabBas === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.habillageToGrilleEvent.emit(true);
  }
}
