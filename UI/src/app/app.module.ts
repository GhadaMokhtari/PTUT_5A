import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ListeResidentComponent } from './components/liste-resident/liste-resident.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { HistoriquePatientComponent } from './components/historique-patient/historique-patient.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RecapitulatifGrilleComponent } from './components/recapitulatif-grille/recapitulatif-grille.component';
import { GrilleComponent } from './components/grille/grille.component';
import { CoherenceOuiComponent } from './components/grille/coherence/coherence-oui/coherence-oui.component';
import { CoherenceComponent } from './components/grille/coherence/coherence.component';
import {MatButtonModule} from "@angular/material/button";
import { OrientationComponent } from './components/grille/orientation/orientation.component';
import { OrientationOuiComponent } from './components/grille/orientation/orientation-oui/orientation-oui.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeResidentComponent,
    NewPatientComponent,
    HistoriquePatientComponent,
    RecapitulatifGrilleComponent,
    GrilleComponent,
    CoherenceOuiComponent,
    CoherenceComponent,
    OrientationComponent,
    OrientationOuiComponent
  ],
  entryComponents: [CoherenceOuiComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatTabsModule,
        MatDialogModule,
        MatButtonModule
    ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
