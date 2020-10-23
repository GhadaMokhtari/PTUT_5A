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
  constructor() { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.eliminationToGrilleEvent.emit(true);
  }
}
