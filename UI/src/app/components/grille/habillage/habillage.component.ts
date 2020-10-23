import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-habillage',
  templateUrl: './habillage.component.html',
  styleUrls: ['./habillage.component.scss']
})
export class HabillageComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  @Output() habillageToGrilleEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.habillageToGrilleEvent.emit(true);
  }

}
