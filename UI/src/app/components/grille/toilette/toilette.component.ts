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
  @Output() toiletteToGrilleEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.toiletteToGrilleEvent.emit(true);
  }

}
