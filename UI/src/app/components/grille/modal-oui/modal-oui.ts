import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {CoherenceComponent} from '../coherence/coherence.component';

@Component({
  selector: 'app-modal-oui',
  templateUrl: './modal-oui.html',
  styleUrls: ['./modal-oui.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ModalOui implements OnInit {


  @Output() modaliteEvent: EventEmitter<string> = new EventEmitter();

  A = false;
  S = false;
  H = false;
  T = false;
  C = false;

  constructor(public dialogRef: MatDialogRef<CoherenceComponent>) { }

  ngOnInit(): void {
  }
  onValidate(): void{
    console.log(this.S);
    console.log({a: this.A, s: this.S, h: this.H, t: this.T, c: this.C});

    if (!this.A  && !this.S && !this.H && !this.T && !this.C){
      this.modaliteEvent.emit('A');
      console.log('A');
    } else {
      this.modaliteEvent.emit('B');
      console.log('B');
    }
  }
}
