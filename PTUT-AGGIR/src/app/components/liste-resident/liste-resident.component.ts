import { Component, OnInit } from '@angular/core';
import { Resident } from '../../utils/resident'

@Component({
  selector: 'app-liste-resident',
  templateUrl: './liste-resident.component.html',
  styleUrls: ['./liste-resident.component.scss']
})
export class ListeResidentComponent implements OnInit {


   residents: Resident[] = [{nom: 'Mokhtari', prenom: 'Ghada', dateNaiss: '1999-07-12'},
     {nom: 'Sarda', prenom: 'Hugo', dateNaiss: '1996-08-05'}];

  constructor() { }

  ngOnInit(): void {
  }

}
