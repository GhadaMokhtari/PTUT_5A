import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrientationOuiComponent} from "./orientation-oui/orientation-oui.component";

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  constructor(public  dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onNativeChange(e) {
    if (e.target.checked){
    }
  }
  // tslint:disable-next-line:typedef
  openDialog(){
    this.dialog.open(OrientationOuiComponent);
  }
}
