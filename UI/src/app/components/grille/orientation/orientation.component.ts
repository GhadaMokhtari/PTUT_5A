import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  resultEspace: string;
  resultTemps: string;
  finalResult: string;

  @Output() orientationToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  espaceResult(event: string): void {
    this.resultEspace = event;
  }
  tempsResult(event: string): void {
    this.resultTemps = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultTemps === 'A' && this.resultEspace === 'A'){
      this.finalResult = 'A';
    }
    if (this.resultTemps === 'A' && this.resultEspace === 'B'){
      this.finalResult = 'B';
    }
    if (this.resultTemps === 'B' && this.resultEspace === 'A'){
      this.finalResult = 'B';
    }
    if (this.resultTemps === 'B' && this.resultEspace === 'B'){
      this.finalResult = 'B';
    }
    if (this.resultEspace === 'C' && this.resultTemps === 'C'){
      this.finalResult = 'C';
    }
    if (this.resultTemps === 'B' && this.resultEspace === 'C'){
      this.finalResult = 'C';
    }
    if (this.resultTemps === 'C' && this.resultEspace === 'B'){
      this.finalResult = 'C';
    }
    if (this.resultEspace === 'A' && this.resultTemps === 'C'){
      this.finalResult = 'C';
    }
    if (this.resultTemps === 'C' && this.resultEspace === 'A'){
      this.finalResult = 'C';
    }
    this.finalResultEvent.emit(this.finalResult);
    this.orientationToGrilleEvent.emit(true);
  }

}
