import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import calculAGGIR from '../../utils/calculAGGIR.json';



@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  selected = 0;
  valeurCoherence: number;
  valeurOrientation: number;
  valeurToilette: number;
  valeurHabillage: number;
  valeurAlimentation: number;
  valeurElimination: number;
  valeurTransferts: number;
  valeurDepInt: number;
  valeurDepExt: number;
  valeurCommDist: number;
  resultats = {
    coherence: {
      coherenceModality: '',
      coherenceValeurs: ''
    },
    orientationV: {
      orientationModality: '',
      orientationValeurs: '',
    },
    toilette: {
      toiletteModality: '',
      toiletteValeurs: ''
    },
    habillage: {
      habillageModality: '',
      habillageValeurs: '',
    },
    alimentation: {
      alimentationModality: '',
      alimentationValeurs: ''
    },
    elimination: {
      eliminationModality: '',
      eliminationValeurs: '',
    },
    tranferts: {
      transfertsModality: '',
      transfertsValeurs: '',
    },
    deplacementsInterieurs: {
      deplacementsInterieursModality: '',
      depInterValeurs: ''
    },
    deplacementsExterieurs: {
      deplacementsExterieursModality: '',
      depExtValeurs: '',
    },
    communicationDistance: {
      communicationDistanceModality: '',
      commDistValeurs: ''
    },
    gestion: {
      gestionModality: '',
      gestionValeurs: ''
    },
    menage: {
      menageModality: '',
      menageValeurs: ''
    },
    cuisine: {
      cuisineModality: '',
      cuisineValeurs: ''
    },
    transportsV: {
      transportsModality: '',
      transportsValeurs: ''
    },
    achats: {
      achatsModality: '',
      achatsValeurs: '',
    },
    suiviTraitement: {
      suiviMedModality: '',
      suiviMedValeurs: ''
    },
    activitesLibres: {
      activitesLibresModality: '',
      actLibValeurs: ''
    }
  };
  score: number;
  rang: number;
  gir: number;


  constructor(
    public  dialog: MatDialog,
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }


  recupResultCoherence(event: string): void {
    this.resultats.coherence.coherenceModality = event;
    console.log('grille coherence', this.resultats.coherence.coherenceModality);
  }
  recupResultOrientation(event: string): void {
    this.resultats.orientationV.orientationModality = event;
  }
  recupResultToilette(event: string): void {
    this.resultats.toilette.toiletteModality = event;
  }
  recupResultHabillage(event: string): void {
    this.resultats.habillage.habillageModality = event;
    console.log('grille habillage', this.resultats.habillage.habillageModality);
  }
  recupResultAlimentation(event: string): void {
    this.resultats.alimentation.alimentationModality = event;
  }
  recupResultElimination(event: string): void {
    this.resultats.elimination.eliminationModality = event;
  }
  recupResultTransfets(event: string): void {
    this.resultats.tranferts.transfertsModality = event;
  }
  recupResultDeplInter(event: string): void {
    this.resultats.deplacementsInterieurs.deplacementsInterieursModality = event;
  }
  recupResultDepExter(event: string): void {
    this.resultats.deplacementsExterieurs.deplacementsExterieursModality = event;
  }
  recupResultCommDistance(event: string): void {
    this.resultats.communicationDistance.communicationDistanceModality = event;
  }
  recupResultGestion(event: string): void {
    this.resultats.gestion.gestionModality = event;
  }
  recupResultCuisine(event: string): void {
    this.resultats.cuisine.cuisineModality = event;
  }
  recupResultMenage(event: string): void {
    this.resultats.menage.menageModality = event;
  }
  recupResultTransports(event: string): void {
    this.resultats.transportsV.transportsModality = event;
  }
  recupResultAchat(event: string): void {
    this.resultats.achats.achatsModality = event;
  }
  recupResultSuiviMed(event: string): void {
    this.resultats.suiviTraitement.suiviMedModality = event;
  }
  recupResultActivitesLibres(event: string): void {
    this.resultats.activitesLibres.activitesLibresModality = event;
    console.log('actLibres', this.resultats.activitesLibres.activitesLibresModality);
  }

  recupCoherenceValeurs(event: string): void{
    this.resultats.coherence.coherenceValeurs = event;
    console.log('Cohérence valeurs', this.resultats.coherence.coherenceValeurs);
  }
  recuOrientationValeurs(event: string): void{
    this.resultats.orientationV.orientationValeurs = event;
  }
  recupToiletteValeurs(event: string): void{
    this.resultats.toilette.toiletteValeurs = event;
  }
  recupHabillageValeurs(event: string): void{
    this.resultats.habillage.habillageValeurs = event;
  }
  recupAlimentationValeurs(event: string): void{
    this.resultats.alimentation.alimentationValeurs = event;
  }
  recupEliminationValeurs(event: string): void{
    this.resultats.elimination.eliminationValeurs = event;
  }
  recupTransfertsValeurs(event: string): void{
    this.resultats.tranferts.transfertsValeurs = event;
  }
  recupDepExtValeurs(event: string): void{
    this.resultats.deplacementsExterieurs.depExtValeurs = event;
  }
  recupDepInterValeurs(event: string): void{
    this.resultats.deplacementsInterieurs.depInterValeurs = event;
  }
  recupCommDistValeurs(event: string): void{
    this.resultats.communicationDistance.commDistValeurs = event;
  }
  recupGestionValeurs(event: string): void{
    this.resultats.gestion.gestionValeurs = event;
  }
  recupMenageValeurs(event: string): void{
    this.resultats.menage.menageValeurs = event;
  }
  recupCuisineValeurs(event: string): void{
    this.resultats.cuisine.cuisineValeurs = event;
  }
  recupTransportsValeurs(event: string): void{
    this.resultats.transportsV.transportsValeurs = event;
  }
  recupAchatsValeurs(event: string): void{
    this.resultats.achats.achatsValeurs = event;
  }
  recupSuiviMedValeurs(event: string): void{
    this.resultats.suiviTraitement.suiviMedValeurs = event;
  }
  recupActLibresValeurs(event: string): void{
    this.resultats.activitesLibres.actLibValeurs = event;
  }

  createEvaluation(): any{
    const patientId = this.route.snapshot.paramMap.get('id');
    const rangEval = this.calculRang();
    const scoreEval =  this.score;

    const evaluation = {
      date: new Date(),
      score: scoreEval,
      gir: 1,
      rang: rangEval,
      patient: patientId
    };

    this.evaluationService.create(evaluation).subscribe((data) => {
      this.router.navigate(['historiquePatient', patientId]);
    }, (err) => {
      console.error(err);
    });
  }

  goBackToHistoric(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['historiquePatient', patientId]);
  }

  calculRang(): void {
    console.log(calculAGGIR.variables);
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 2000;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 1200;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
        this.valeurToilette = 40;
        // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
       this.valeurToilette = 16;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 1200;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 16;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 60;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 20;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 100;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 16;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 800;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 120;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 32;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    if (this.score >= 4380) {
      this.rang = 1;
      // tslint:disable-next-line:align
    } if (this.score < 4380 && this.score >= 4140) {
      this.rang = 2;
      // tslint:disable-next-line:align
    } if (this.score  < 4140 && this.score >= 3390) {
      this.rang = 3;
    }
  }
}
