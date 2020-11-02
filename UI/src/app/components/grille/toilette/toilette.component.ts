import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toilette',
  templateUrl: './toilette.component.html',
  styleUrls: ['./toilette.component.scss']
})
export class ToiletteComponent implements OnInit {

  toilette = false;
  tabs = [{title: '', target: ''}];
  selected = 0;
  resultHaut: string;
  resultBas: string;
  finalResult: string;

  @Output() toiletteToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  hautResult(event: string): void {
    this.resultHaut = event;
  }
  basResult(event: string): void {
    this.resultBas = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultHaut === 'A' && this.resultBas === 'A'){
      this.finalResult = 'A';
    }
    if (this.resultHaut === 'C' && this.resultBas === 'C'){
      this.finalResult = 'C';
    } else {
      this.finalResult = 'B';
    }
    this.toiletteToGrilleEvent.emit(true);
  }
}
