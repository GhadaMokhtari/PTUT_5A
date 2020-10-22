import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalOui} from './modal-oui/modal-oui';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;

  constructor(public  dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }

  // tslint:disable-next-line:typedef
  onNativeChange(e) {
    if (e.target.checked){
    }
  }
}
