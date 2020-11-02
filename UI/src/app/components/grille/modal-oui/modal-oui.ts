import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {CoherenceComponent} from '../coherence/coherence.component';
import {CommunicationComponent} from '../coherence/communication/communication.component';

@Component({
  selector: 'app-modal-oui',
  templateUrl: './modal-oui.html',
  styleUrls: ['./modal-oui.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ModalOui implements OnInit {


  @Output() modaliteEvent: EventEmitter<string> = new EventEmitter();
  @Output() tabsChangeEvent = new EventEmitter<boolean>();

  S: boolean;
  H: boolean;
  T: boolean;
  C: boolean;

  constructor(public dialogRef: MatDialogRef<CommunicationComponent>) { }

  ngOnInit(): void {
  }
  onValidate(): void{
    // console.log(typeof this.A);
    // console.log({a: this.A, s: this.S, h: this.H, t: this.T, c: this.C});


    // @ts-ignore
    if (this.S === 'true' && this.H === 'true' && this.T === 'true' && this.C === 'true' ){
      this.modaliteEvent.emit('A');
      // console.log('A');
    } /*// @ts-ignore
    if (this.S === 'true' && this.H === 'false' && this.T === 'false' && this.C === 'false'){
      this.modaliteEvent.emit('C');
    }*/
    else {
      this.modaliteEvent.emit('B');
     // console.log('B');
    }
    this.tabsChangeEvent.emit(true);
    this.dialogRef.close();
  }
}
