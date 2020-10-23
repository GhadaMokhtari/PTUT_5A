<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toilette',
  templateUrl: './toilette.component.html',
  styleUrls: ['./toilette.component.scss']
})
export class ToiletteComponent implements OnInit {

  toilette = false;
<<<<<<< HEAD
  tabs = [{title: '', target: ''}];
  selected = 0;
  @Output() toiletteToGrilleEvent = new EventEmitter<boolean>();
=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.toiletteToGrilleEvent.emit(true);
  }
=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

}
