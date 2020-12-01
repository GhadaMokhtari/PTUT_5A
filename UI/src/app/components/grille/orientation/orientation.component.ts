import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent implements OnInit {

  selected = 0;
  orientationValeurs = {
    resultEspace: '',
    resultTemps: '',
    resultAdverbesEspace: '',
    resultAdverbesTemps: ''
  };
  finalResult: string;

  @Output() orientationToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() orientationValeursToGrille = new EventEmitter<any>();



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  espaceResult(event: string): void {
    this.orientationValeurs.resultEspace = event;
  }
  tempsResult(event: string): void {
    this.orientationValeurs.resultTemps = event;
  }
  adverbesEspaceResult(event: string): void {
    this.orientationValeurs.resultAdverbesEspace = event;
  }
  adverbesTempsResult(event: string): void {
    this.orientationValeurs.resultAdverbesTemps = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.orientationValeurs.resultTemps === 'A' && this.orientationValeurs.resultEspace === 'A'){
      this.finalResult = 'A';
    } else if (this.orientationValeurs.resultTemps === 'A' && this.orientationValeurs.resultEspace === 'B'){
      this.finalResult = 'B';
    } else if (this.orientationValeurs.resultTemps === 'B' && this.orientationValeurs.resultEspace === 'A'){
      this.finalResult = 'B';
    } else if (this.orientationValeurs.resultTemps === 'B' && this.orientationValeurs.resultEspace === 'B'){
      this.finalResult = 'B';
    } else if (this.orientationValeurs.resultEspace === 'C' && this.orientationValeurs.resultTemps === 'C'){
      this.finalResult = 'C';
    } else if (this.orientationValeurs.resultTemps === 'B' && this.orientationValeurs.resultEspace === 'C'){
      this.finalResult = 'C';
    } else if (this.orientationValeurs.resultTemps === 'C' && this.orientationValeurs.resultEspace === 'B'){
      this.finalResult = 'C';
    } else if (this.orientationValeurs.resultEspace === 'A' && this.orientationValeurs.resultTemps === 'C'){
      this.finalResult = 'C';
    } else if (this.orientationValeurs.resultTemps === 'C' && this.orientationValeurs.resultEspace === 'A'){
      this.finalResult = 'C';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.orientationValeursToGrille.emit(this.orientationValeurs);
    this.orientationToGrilleEvent.emit(true);
  }

}
