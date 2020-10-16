import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app.component';
import {NewPatientComponent} from './components/new-patient/new-patient.component';
import {ListeResidentComponent} from './components/liste-resident/liste-resident.component';
import {HistoriquePatientComponent} from './components/historique-patient/historique-patient.component';

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
    path: 'historiquePatient',
    component: HistoriquePatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
