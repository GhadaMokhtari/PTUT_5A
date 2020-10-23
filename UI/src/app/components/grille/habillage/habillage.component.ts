<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b

@Component({
  selector: 'app-habillage',
  templateUrl: './habillage.component.html',
  styleUrls: ['./habillage.component.scss']
})
export class HabillageComponent implements OnInit {

<<<<<<< HEAD
  tabs = [{title: '', target: ''}];
  selected = 0;
  @Output() habillageToGrilleEvent = new EventEmitter<boolean>();

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.habillageToGrilleEvent.emit(true);
  }

=======
>>>>>>> 4c4941bc96ff05a96a43854a7553bcc64b602c2b
}
