import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toilette',
  templateUrl: './toilette.component.html',
  styleUrls: ['./toilette.component.scss']
})
export class ToiletteComponent implements OnInit {

  selected = 0;
  toiletteValeurs = {
    resultHaut: '',
    resultBas: '',
    resultAdverbesHaut: '',
    resultAdverbesBas: ''
  };
  finalResult: string;

  @Output() toiletteToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() toiletteValeursToGrille = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  hautResult(event: string): void {
    this.toiletteValeurs.resultHaut = event;
  }
  basResult(event: string): void {
    this.toiletteValeurs.resultBas = event;
  }
  adverbesBasResult(event: string): void {
    this.toiletteValeurs.resultAdverbesBas = event;
  }
  adverbesHautResult(event: string): void {
    this.toiletteValeurs.resultAdverbesHaut = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.toiletteValeurs.resultHaut === 'A' && this.toiletteValeurs.resultBas === 'A'){
      this.finalResult = 'A';
    } else if (this.toiletteValeurs.resultHaut === 'C' && this.toiletteValeurs.resultBas === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.toiletteValeursToGrille.emit(this.toiletteValeurs);
    this.toiletteToGrilleEvent.emit(true);
  }
}
