import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-oui',
  templateUrl: './modal-oui.html',
  styleUrls: ['./modal-oui.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ModalOui implements OnInit {


  @Output() modaliteEvent: EventEmitter<string> = new EventEmitter();
  @Output() adverbesEmitEvent = new EventEmitter<any>();
  @Output() tabsChangeEvent = new EventEmitter<boolean>();

  S: boolean;
  H: boolean;
  T: boolean;
  C: boolean;
  valeur = {
    spontanement: '',
    habituellement: '',
    totalement: '',
    correctement: ''
  };


  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  onValidate(): void{
    if (this.S === true){
      this.valeur.spontanement = 'Oui';
    } else {
      this.valeur.spontanement = 'Non';
    }

    if (this.H === true){
      this.valeur.habituellement = 'Oui';
    } else {
      this.valeur.habituellement = 'Non';
    }

    if (this.T === true){
      this.valeur.totalement = 'Oui';
    } else {
      this.valeur.totalement = 'Non';
    }

    if (this.C === true){
      this.valeur.correctement = 'Oui';
    } else {
      this.valeur.correctement = 'Non';
    }
    this.adverbesEmitEvent.emit(this.valeur);

    // @ts-ignore
    if (this.S === true && this.H === true && this.T === true && this.C === true ){
      this.modaliteEvent.emit('A');
      // console.log('A');
    }/* // @ts-ignore
    if (this.S === 'true' && this.H === 'false' && this.T === 'false' && this.C === 'false'){
      this.modaliteEvent.emit('C');
    }*/
    else {
      this.modaliteEvent.emit('B');
    }
    this.tabsChangeEvent.emit(true);
    this.dialogRef.close('close-for-validation');
  }
}
