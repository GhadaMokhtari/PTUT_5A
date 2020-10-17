import { Component, OnInit } from '@angular/core';
import {Evaluation} from '../../utils/evaluation';
import {Resident} from '../../utils/resident';

@Component({
  selector: 'app-historique-patient',
  templateUrl: './historique-patient.component.html',
  styleUrls: ['./historique-patient.component.scss']
})
export class HistoriquePatientComponent implements OnInit {

  evaluations: Evaluation[] = [{date: '2020-10-16', gir: 6}];
  resident = [{nom: 'Mokhtari', prenom: 'Ghada', dateNaiss: '1999-07-12'}];
  constructor() { }

  ngOnInit(): void {
  }

}
