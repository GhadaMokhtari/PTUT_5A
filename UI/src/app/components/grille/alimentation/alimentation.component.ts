import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})
export class AlimentationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  resultServir: string;
  resultManger: string;
  finalModality: string;

  @Output() alimentationToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  servirResult(event: string): void {
    this.resultServir = event;
  }
  mangerResult(event: string): void {
    this.resultManger = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.resultServir === 'A' && this.resultManger === 'A'){
      this.finalModality = 'A';
    }
    if (this.resultServir === 'C' && this.resultManger === 'C'){
      this.finalModality = 'C';
    }
    if (this.resultServir === 'B' && this.resultManger === 'C'){
      this.finalModality = 'C';
    }
    if (this.resultServir === 'C' && this.resultManger === 'B'){
      this.finalModality = 'C';
    } else {
      this.finalModality = 'B';
    }
    this.finalResultEvent.emit(this.finalModality);
    this.alimentationToGrilleEvent.emit(true);
  }

}
