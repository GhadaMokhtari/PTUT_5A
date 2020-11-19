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
import {MatCardModule} from '@angular/material/card';
import { AlimentationComponent } from './components/grille/alimentation/alimentation.component';
import { ServirComponent } from './components/grille/alimentation/servir/servir.component';
import { MangerComponent } from './components/grille/alimentation/manger/manger.component';
import { EliminationComponent } from './components/grille/elimination/elimination.component';
import { UrinaireComponent } from './components/grille/elimination/urinaire/urinaire.component';
import { FecaleComponent } from './components/grille/elimination/fecale/fecale.component';
import { TransfertsComponent } from './components/grille/transferts/transferts.component';
import { DeplacementsExterieursComponent } from './components/grille/deplacements-exterieurs/deplacements-exterieurs.component';
import { DeplacementsInterieursComponent } from './components/grille/deplacements-interieurs/deplacements-interieurs.component';
import { CommunicationDistanceComponent } from './components/grille/communication-distance/communication-distance.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {GrilleComponent} from './components/grille/grille.component';
import { GestionComponent } from './components/grille/variables-illustratives/gestion/gestion.component';
import { CuisineComponent } from './components/grille/variables-illustratives/cuisine/cuisine.component';
import { MenageComponent } from './components/grille/variables-illustratives/menage/menage.component';
import { TransportComponent } from './components/grille/variables-illustratives/transport/transport.component';
import { AchatComponent } from './components/grille/variables-illustratives/achat/achat.component';
import { SuiviTraitementComponent } from './components/grille/variables-illustratives/suivi-traitement/suivi-traitement.component';
import { ActivitesLibresComponent } from './components/grille/variables-illustratives/activites-libres/activites-libres.component';
import { GrapheComponent } from './components/historique-patient/graphe/graphe.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    AlimentationComponent,
    ServirComponent,
    MangerComponent,
    EliminationComponent,
    UrinaireComponent,
    FecaleComponent,
    TransfertsComponent,
    DeplacementsExterieursComponent,
    DeplacementsInterieursComponent,
    CommunicationDistanceComponent,
    GestionComponent,
    CuisineComponent,
    MenageComponent,
    TransportComponent,
    AchatComponent,
    SuiviTraitementComponent,
    ActivitesLibresComponent,
    GrapheComponent,

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
    MatCardModule,
    MatButtonToggleModule,
    GoogleChartsModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
