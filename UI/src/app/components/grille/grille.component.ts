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


  goBackToHistoric(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['historiquePatient', patientId]);
  }

  calculScoreGA(): number {
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
      this.valeurHabillage = 40;
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
    return this.score;
  }

  calculScoreGB(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 1500;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 320;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 1200;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 120;
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
      this.valeurHabillage = 40;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 16;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 60;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 0;
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
      this.valeurDepInt = -80;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = -40;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;

  }

  calculScoreGC(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 0;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 0;
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
      this.valeurHabillage = 40;
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
      this.valeurElimination = 160;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 20;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 1000;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 200;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 40;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;

  }

  calculScoreGD(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
      this.valeurToilette = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
      this.valeurToilette = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 800;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 800;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 0;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;

  }

  calculScoreGE(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
      this.valeurToilette = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
      this.valeurToilette = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 0;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;
  }

  calculScoreGF(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 100;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 100;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
      this.valeurToilette = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
      this.valeurToilette = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 0;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;
  }

  calculScoreGG(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 150;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 150;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
      this.valeurToilette = 300;
      // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
      this.valeurToilette = 200;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 300;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 200;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 200;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 500;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 200;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 400;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 200;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 200;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 100;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;
  }

  calculScoreGH(): number {
    if (this.resultats.coherence.coherenceModality === 'C'){
      this.valeurCoherence = 0;
      // tslint:disable-next-line:align
    } if (this.resultats.coherence.coherenceModality === 'B'){
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    } if (this.resultats.orientationV.orientationModality === 'C'){
      this.valeurOrientation = 0;
      // tslint:disable-next-line:align
    } if (this.resultats.orientationV.orientationModality === 'B'){
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    } if (this.resultats.toilette.toiletteModality === 'C'){
      this.valeurToilette = 3000;
      // tslint:disable-next-line:align
    } if (this.resultats.toilette.toiletteModality === 'B'){
      this.valeurToilette = 2000;
      // tslint:disable-next-line:align
    } else {
      this.valeurToilette = 0;
    } if (this.resultats.habillage.habillageModality === 'C'){
      this.valeurHabillage = 3000;
      // tslint:disable-next-line:align
    } if (this.resultats.habillage.habillageModality === 'B'){
      this.valeurHabillage = 2000;
    } else {
      this.valeurHabillage = 0;
    } if (this.resultats.alimentation.alimentationModality === 'C'){
      this.valeurAlimentation = 3000;
      // tslint:disable-next-line:align
    } if (this.resultats.alimentation.alimentationModality === 'B'){
      this.valeurAlimentation = 2000;
      // tslint:disable-next-line:align
    } else {
      this.valeurAlimentation = 0;
    } if (this.resultats.elimination.eliminationModality === 'C'){
      this.valeurElimination = 3000;
      // tslint:disable-next-line:align
    } if (this.resultats.elimination.eliminationModality === 'B'){
      this.valeurElimination = 2000;
      // tslint:disable-next-line:align
    } else {
      this.valeurElimination = 0;
    } if (this.resultats.tranferts.transfertsModality === 'C'){
      this.valeurTransferts = 1000;
      // tslint:disable-next-line:align
    } if (this.resultats.tranferts.transfertsModality === 'B'){
      this.valeurTransferts = 2000;
      // tslint:disable-next-line:align
    } else {
      this.valeurTransferts = 0;
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C'){
      this.valeurDepInt = 1000;
      // tslint:disable-next-line:align
    } if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B'){
      this.valeurDepInt = 1000;
      // tslint:disable-next-line:align
    } else {
      this.valeurDepInt = 0;
    }
    this.valeurDepExt = 0;
    this.valeurCommDist = 0;

    // tslint:disable-next-line:max-line-length
    this.score = this.valeurCoherence + this.valeurOrientation + this.valeurToilette + this.valeurHabillage + this.valeurAlimentation + this.valeurElimination + this.valeurTransferts + this.valeurDepInt + this.valeurDepExt + this.valeurCommDist;
    return this.score;

  }
  calculRang(): void {
    // console.log(calculAGGIR.variables);
    const scoreA = this.calculScoreGA();
    if (scoreA >= 4380) {
      this.rang = 1;
    }
    if (scoreA < 4380 && scoreA >= 4140) {
      this.rang = 2;
    }
    if (scoreA  < 4140 && scoreA >= 3390) {
      this.rang = 3;
    }
    if (scoreA < 3390) {
      const scoreB = this.calculScoreGB();
      if (scoreB >= 2016) {
          this.rang = 4;
      }
      if (this.score < 2016) {
          const scoreC = this.calculScoreGC();
          if (scoreC >= 1700) {
              this.rang = 5;
          }
          if (scoreC < 1700 && scoreC >= 1432) {
              this.rang = 6;
          }
          if (scoreC < 1432) {
              const scoreD = this.calculScoreGD();
              if (scoreD >= 2400){
                  this.rang = 7;
              }
              if (scoreD < 2400) {
                  const scoreE = this.calculScoreGD();
                  if (scoreE >= 1200) {
                      this.rang = 8;
                  }
                  if (scoreE < 1200) {
                      const scoreF = this.calculScoreGF();
                      if (scoreF >= 800) {
                          this.rang = 10;
                      }
                      if (scoreF < 800) {
                          const scoreG = this.calculScoreGG();
                          if (scoreG >= 650) {
                              this.rang = 10;
                          }
                          if (scoreG < 650) {
                              const scoreH = this.calculScoreGH();
                              if (scoreH >= 4000) {
                                  this.rang = 11;
                              }
                              if (scoreH < 4000 && scoreH >= 2000) {
                                  this.rang = 12;
                              }
                              if (scoreH < 2000) {
                                  this.rang = 13;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }

  calculGir(): void {
    if (this.rang === 1) {
      this.gir = 1;
    }
    if (this.rang === 2 || this.rang === 3 || this.rang === 4 || this.rang === 5 || this.rang === 6 || this.rang === 7) {
      this.gir = 2;
    }
    if (this.rang === 8 || this.rang === 9) {
      this.gir = 3;
    }
    if (this.rang === 10 || this.rang === 11) {
      this.gir = 4;
    }
    if (this.rang === 12) {
      this.gir = 5;
    }
    if (this.rang === 13) {
      this.gir = 6;
    }
  }

  createEvaluation(): any{
    this.calculRang();
    this.calculGir();
    const patientId = this.route.snapshot.paramMap.get('id');
    const scoreEval =  this.score;
    const rangEval = this.rang;
    const  girEval = this.gir;

    console.log('score', this.score);
    console.log('rang', this.rang);
    console.log('gir', this.gir);

    console.log('scoreE', scoreEval);
    console.log('rangE', rangEval);
    console.log('girE', girEval);

    const evaluation = {
      date: new Date(),
      score: scoreEval,
      gir: 1,
      rang: rangEval,
      patient: patientId
    };

    /*this.evaluationService.create(evaluation).subscribe((data) => {
      this.router.navigate(['historiquePatient', patientId]);
    }, (err) => {
      console.error(err);
    });*/
  }

}
