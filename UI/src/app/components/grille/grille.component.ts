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

  tabs = [{title: '', target: ''}];
  selected = 0;


  coherenceModality: string;
  orientationModality: string;
  toiletteModality: string;
  habillageModality: string;
  alimentationModality: string;
  eliminationModality: string;
  transfertsModality: string;
  deplacementsInterieursModality: string;
  deplacementsExterieursModality: string;
  communicationDistanceModality: string;
  gestionModality: string;
  menageModality: string;
  cuisineModality: string;
  transportsModality: string;
  achatsModality: string;
  suiviMedModality: string;
  activitesLibresModality: string;

  constructor(
    public  dialog: MatDialog,
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.calculGir();
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }

  recupResultCoherence(event: string): void {
    this.coherenceModality = event;
    console.log('grille coherence', this.coherenceModality);
  }
  recupResultOrientation(event: string): void {
    this.orientationModality = event;
  }
  recupResultToilette(event: string): void {
    this.toiletteModality = event;
  }
  recupResultHabillage(event: string): void {
    this.habillageModality = event;
  }
  recupResultAlimentation(event: string): void {
    this.alimentationModality = event;
  }
  recupResultElimination(event: string): void {
    this.eliminationModality = event;
  }
  recupResultTransfets(event: string): void {
    this.transfertsModality = event;
  }
  recupResultDeplInter(event: string): void {
    this.deplacementsInterieursModality = event;
  }
  recupResultDepExter(event: string): void {
    this.deplacementsExterieursModality = event;
  }
  recupResultCommDistance(event: string): void {
    this.communicationDistanceModality = event;
  }
  recupResultGestion(event: string): void {
    this.gestionModality = event;
  }
  recupResultCuisine(event: string): void {
    this.cuisineModality = event;
  }
  recupResultMenage(event: string): void {
    this.menageModality = event;
  }
  recupResultTransports(event: string): void {
    this.transportsModality = event;
  }
  recupResultAchat(event: string): void {
    this.achatsModality = event;
  }
  recupResultSuiviMed(event: string): void {
    this.suiviMedModality = event;
  }
  recupResultActivitesLibres(event: string): void {
    this.activitesLibresModality = event;
  }
  createEvaluation(): any{
    const patientId = this.route.snapshot.paramMap.get('id');

    const evaluation = {
      date: new Date(),
      score: 4,
      gir: 1,
      rang: 3,
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

  calculGir(): void {
    const a = calculAGGIR[0];
    console.log('test', a);
  }
}
