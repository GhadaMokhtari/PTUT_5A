import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app.component';
import {NewPatientComponent} from './components/new-patient/new-patient.component';
import {ListeResidentComponent} from './components/liste-resident/liste-resident.component';
import {HistoriquePatientComponent} from './components/historique-patient/historique-patient.component';
import {RecapitulatifGrilleComponent} from './components/recapitulatif-grille/recapitulatif-grille.component';
import {GrilleComponent} from './components/grille/grille.component';

const routes: Routes = [
  {
  path: '',
  component: ListeResidentComponent
},
  {
    path: 'newPatient',
    component: NewPatientComponent
  },
  {
    path: 'historiquePatient/:id',
    component: HistoriquePatientComponent
  },
  {
    path: 'recapGrille/:id/:idEval',
    component: RecapitulatifGrilleComponent
  },
  {
    path: 'newEvaluation/:id',
    component: GrilleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
