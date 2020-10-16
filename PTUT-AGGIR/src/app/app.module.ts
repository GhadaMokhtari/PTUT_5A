import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ListeResidentComponent } from './components/liste-resident/liste-resident.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HistoriquePatientComponent } from './components/historique-patient/historique-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeResidentComponent,
    NewPatientComponent,
    HistoriquePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
