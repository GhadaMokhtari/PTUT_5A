import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})
export class AlimentationComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;
  finalModality: string;
  alimentationValeurs = {
    resultServir: '',
    resultManger: '',
    resultAdverbesServir: '',
    resultAdverbesManger: ''
  };

  @Output() alimentationToGrilleEvent = new EventEmitter<boolean>();
  @Output() finalResultEvent = new EventEmitter<string>();
  @Output() alimentationValeursToGrille = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  servirResult(event: string): void {
    this.alimentationValeurs.resultServir = event;
  }
  mangerResult(event: string): void {
    this.alimentationValeurs.resultManger = event;
  }
  adverbesServirResult(event: any): void{
    this.alimentationValeurs.resultAdverbesServir = event;
  }
  adverbesMangerResult(event: any): void{
    this.alimentationValeurs.resultAdverbesManger = event;
  }
  goToTab(tab: number): void {
    this.selected = tab;
  }
  goToTabParent(): void {
    if (this.alimentationValeurs.resultServir === 'A' && this.alimentationValeurs.resultManger === 'A'){
      this.finalModality = 'A';
    }
    if (this.alimentationValeurs.resultServir === 'C' && this.alimentationValeurs.resultManger === 'C'){
      this.finalModality = 'C';
    }
    if (this.alimentationValeurs.resultServir === 'B' && this.alimentationValeurs.resultManger === 'C'){
      this.finalModality = 'C';
    }
    if (this.alimentationValeurs.resultServir === 'C' && this.alimentationValeurs.resultManger === 'B'){
      this.finalModality = 'C';
    } else {
      this.finalModality = 'B';
    }
    this.finalResultEvent.emit(this.finalModality);
    this.alimentationValeursToGrille.emit(this.alimentationValeurs)
    this.alimentationToGrilleEvent.emit(true);
  }

}
