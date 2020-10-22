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
import { ModalOui } from './components/grille/modal-oui/modal-oui';
import { CoherenceComponent } from './components/grille/coherence/coherence.component';
import {MatButtonModule} from '@angular/material/button';
import { ComportementComponent } from './components/grille/coherence/comportement/comportement.component';
import { CommunicationComponent } from './components/grille/coherence/communication/communication.component';
import { OrientationComponent } from './components/grille/orientation/orientation.component';
import { TempsComponent } from './components/grille/orientation/temps/temps.component';
import { EspaceComponent } from './components/grille/orientation/espace/espace.component';
import { ToiletteComponent } from './components/grille/toilette/toilette.component';
import { HautComponent } from './components/grille/toilette/haut/haut.component';
import { BasComponent } from './components/grille/toilette/bas/bas.component';
import { HabillageComponent } from './components/grille/habillage/habillage.component';
import { HabHautComponent } from './components/grille/habillage/hab-haut/hab-haut.component';
import { HabBasComponent } from './components/grille/habillage/hab-bas/hab-bas.component';
import { HabMoyenComponent } from './components/grille/habillage/hab-moyen/hab-moyen.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    ListeResidentComponent,
    NewPatientComponent,
    HistoriquePatientComponent,
    RecapitulatifGrilleComponent,
    GrilleComponent,
    ModalOui,
    CoherenceComponent,
    ComportementComponent,
    CommunicationComponent,
    OrientationComponent,
    TempsComponent,
    EspaceComponent,
    ToiletteComponent,
    HautComponent,
    BasComponent,
    HabillageComponent,
    HabHautComponent,
    HabBasComponent,
    HabMoyenComponent,
  ],
  entryComponents: [ModalOui],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
