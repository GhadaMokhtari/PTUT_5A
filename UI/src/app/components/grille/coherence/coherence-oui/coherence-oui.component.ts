import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CoherenceComponent} from '../coherence.component';

@Component({
  selector: 'app-coherence-oui',
  templateUrl: './coherence-oui.component.html',
  styleUrls: ['./coherence-oui.component.scss']
})
export class CoherenceOuiComponent implements OnInit {

  isclose = true;

  constructor(public dialogRef: MatDialogRef<CoherenceComponent>) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onNoClick(): void{
    this.isclose = false;
    this.dialogRef.close();
  }

}
