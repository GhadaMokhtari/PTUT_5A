import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})
export class AlimentationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

  @Output() alimentationToGrilleEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.alimentationToGrilleEvent.emit(true);
  }

}
