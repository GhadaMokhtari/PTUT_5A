import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './components/app.component';
import {NewPatientComponent} from './components/new-patient/new-patient.component';
import {ListeResidentComponent} from './components/liste-resident/liste-resident.component';

const routes: Routes = [
  {
  path: '',
  component: ListeResidentComponent
},
  {
    path: 'newPatient',
    component: NewPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
