import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-habillage',
  templateUrl: './habillage.component.html',
  styleUrls: ['./habillage.component.scss']
})
export class HabillageComponent implements OnInit {

  selected = 0;
  habillageValeurs = {
    resultHabHaut: '',
    resultHabBas: '',
    resultHabMoyen: '',
    resultAdverbesHaut : '',
    resultAdverbesMoyen : '',
    resultAdverbesBas : ''
  };
  finalResult: string;
  @Output() habillageToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() habillageValeursToGrille = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  habHautResult(event: string): void {
    this.habillageValeurs.resultHabHaut = event;
  }
  habBasResult(event: string): void {
    this.habillageValeurs.resultHabBas = event;
  }
  habMoyenResult(event: string): void {
    this.habillageValeurs.resultHabMoyen = event;
  }
  adverbesHautresult(event: string): void{
    this.habillageValeurs.resultAdverbesHaut = event;
  }
  adverbesMoyenresult(event: string): void{
    this.habillageValeurs.resultAdverbesMoyen = event;
  }
  adverbesBasresult(event: string): void{
    this.habillageValeurs.resultAdverbesBas = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    // tslint:disable-next-line:max-line-length
    if (this.habillageValeurs.resultHabHaut === 'A' && this.habillageValeurs.resultHabMoyen === 'A' && this.habillageValeurs.resultHabBas === 'A'){
      this.finalResult = 'A';
    }
    // tslint:disable-next-line:max-line-length
    else if (this.habillageValeurs.resultHabHaut === 'C' && this.habillageValeurs.resultHabMoyen === 'C' && this.habillageValeurs.resultHabBas === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.habillageValeursToGrille.emit(this.habillageValeurs);
    this.habillageToGrilleEvent.emit(true);
  }
}
