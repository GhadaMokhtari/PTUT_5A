import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ListeResidentComponent } from './components/liste-resident/liste-resident.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HistoriquePatientComponent } from './components/historique-patient/historique-patient.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RecapitulatifGrilleComponent } from './components/recapitulatif-grille/recapitulatif-grille.component';
import { GrilleComponent } from './components/grille/grille.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeResidentComponent,
    NewPatientComponent,
    HistoriquePatientComponent,
    RecapitulatifGrilleComponent,
    GrilleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
