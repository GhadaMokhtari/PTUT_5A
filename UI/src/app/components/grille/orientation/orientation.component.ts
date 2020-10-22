import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalOui} from "../modal-oui/modal-oui";

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  orientation = false;
  @Output() orientationToGrilleEvent = new EventEmitter<boolean>();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    this.orientationToGrilleEvent.emit(true);
  }

}
