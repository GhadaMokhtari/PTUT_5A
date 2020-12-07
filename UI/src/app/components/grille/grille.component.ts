import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  enable = false;



  constructor(
    public dialog: MatDialog,
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goToTab(tab: number): void {
    this.selected = tab;
  }


  recupResultCoherence(event: string): void {
    this.resultats.coherence.coherenceModality = event;
  }
  recupResultOrientation(event: string): void {
    this.resultats.orientationV.orientationModality = event;
  }
  recupResultToilette(event: string): void {
    this.resultats.toilette.toiletteModality = event;
  }
  recupResultHabillage(event: string): void {
    this.resultats.habillage.habillageModality = event;
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
    this.enable = true;
  }

  recupCoherenceValeurs(event: string): void {
    this.resultats.coherence.coherenceValeurs = event;
  }
  recuOrientationValeurs(event: string): void {
    this.resultats.orientationV.orientationValeurs = event;
  }
  recupToiletteValeurs(event: string): void {
    this.resultats.toilette.toiletteValeurs = event;
  }
  recupHabillageValeurs(event: string): void {
    this.resultats.habillage.habillageValeurs = event;
  }
  recupAlimentationValeurs(event: string): void {
    this.resultats.alimentation.alimentationValeurs = event;
  }
  recupEliminationValeurs(event: string): void {
    this.resultats.elimination.eliminationValeurs = event;
  }
  recupTransfertsValeurs(event: string): void {
    this.resultats.tranferts.transfertsValeurs = event;
  }
  recupDepExtValeurs(event: string): void {
    this.resultats.deplacementsExterieurs.depExtValeurs = event;
  }
  recupDepInterValeurs(event: string): void {
    this.resultats.deplacementsInterieurs.depInterValeurs = event;
  }
  recupCommDistValeurs(event: string): void {
    this.resultats.communicationDistance.commDistValeurs = event;
  }
  recupGestionValeurs(event: string): void {
    this.resultats.gestion.gestionValeurs = event;
  }
  recupMenageValeurs(event: string): void {
    this.resultats.menage.menageValeurs = event;
  }
  recupCuisineValeurs(event: string): void {
    this.resultats.cuisine.cuisineValeurs = event;
  }
  recupTransportsValeurs(event: string): void {
    this.resultats.transportsV.transportsValeurs = event;
  }
  recupAchatsValeurs(event: string): void {
    this.resultats.achats.achatsValeurs = event;
  }
  recupSuiviMedValeurs(event: string): void {
    this.resultats.suiviTraitement.suiviMedValeurs = event;
  }
  recupActLibresValeurs(event: string): void {
    this.resultats.activitesLibres.actLibValeurs = event;
  }

  goBackToHistoric(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['historiquePatient', patientId]);
  }

  calculScoreGA(): number {
    // Cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 2000;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // Orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 1200;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // Toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 40;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 16;
    } else {
      this.valeurToilette = 0;
    }

    // Habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 40;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 16;
    } else {
      this.valeurHabillage = 0;
    }

    // Alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 60;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 20;
    } else {
      this.valeurAlimentation = 0;
    }

    // Eliminitation
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 100;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 16;
    } else {
      this.valeurElimination = 0;
    }

    // Transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 800;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 120;
    } else {
      this.valeurTransferts = 0;
    }

    // Déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 200;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 32;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 1500;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 320;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 1200;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 120;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 40;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 16;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 40;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 16;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 60;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 0;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 100;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 16;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 800;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 120;
    } else {
      this.valeurTransferts = 0;
    }

    // deplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = -80;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = -40;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 0;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 0;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 40;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 16;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 40;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 16;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 60;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 20;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 160;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 20;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 1000;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 200;
    } else {
      this.valeurTransferts = 0;
    }

    // déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 400;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 40;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 400;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 400;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 400;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 100;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 400;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 400;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 100;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 800;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 100;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 800;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 100;
    } else {
      this.valeurTransferts = 0;
    }

    // deplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 200;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 0;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 200;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 200;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 500;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 100;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 500;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 500;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 100;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 500;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 100;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 500;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 100;
    } else {
      this.valeurTransferts = 0;
    }

    // déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 200;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 0;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 200;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 100;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 200;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 100;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 500;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 100;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 500;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 100;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 500;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 100;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 500;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 100;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 500;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 100;
    } else {
      this.valeurTransferts = 0;
    }

    // déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 200;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 0;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 150;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 150;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 300;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 200;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 300;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 200;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 500;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 200;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 500;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 200;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 400;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 200;
    } else {
      this.valeurTransferts = 0;
    }

    // déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 200;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 100;
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
    // cohérence
    if (this.resultats.coherence.coherenceModality === 'C') {
      this.valeurCoherence = 0;
    } else if (this.resultats.coherence.coherenceModality === 'B') {
      this.valeurCoherence = 0;
    } else {
      this.valeurCoherence = 0;
    }

    // orientation
    if (this.resultats.orientationV.orientationModality === 'C') {
      this.valeurOrientation = 0;
    } else if (this.resultats.orientationV.orientationModality === 'B') {
      this.valeurOrientation = 0;
    } else {
      this.valeurOrientation = 0;
    }

    // toilette
    if (this.resultats.toilette.toiletteModality === 'C') {
      this.valeurToilette = 3000;
    } else if (this.resultats.toilette.toiletteModality === 'B') {
      this.valeurToilette = 2000;
    } else {
      this.valeurToilette = 0;
    }

    // habillage
    if (this.resultats.habillage.habillageModality === 'C') {
      this.valeurHabillage = 3000;
    } else if (this.resultats.habillage.habillageModality === 'B') {
      this.valeurHabillage = 2000;
    } else {
      this.valeurHabillage = 0;
    }

    // alimentation
    if (this.resultats.alimentation.alimentationModality === 'C') {
      this.valeurAlimentation = 3000;
    } else if (this.resultats.alimentation.alimentationModality === 'B') {
      this.valeurAlimentation = 2000;
    } else {
      this.valeurAlimentation = 0;
    }

    // elimination
    if (this.resultats.elimination.eliminationModality === 'C') {
      this.valeurElimination = 3000;
    } else if (this.resultats.elimination.eliminationModality === 'B') {
      this.valeurElimination = 2000;
    } else {
      this.valeurElimination = 0;
    }

    // transferts
    if (this.resultats.tranferts.transfertsModality === 'C') {
      this.valeurTransferts = 1000;
    } else if (this.resultats.tranferts.transfertsModality === 'B') {
      this.valeurTransferts = 2000;
    } else {
      this.valeurTransferts = 0;
    }

    // déplacements intérieurs
    if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'C') {
      this.valeurDepInt = 1000;
    } else if (this.resultats.deplacementsInterieurs.deplacementsInterieursModality === 'B') {
      this.valeurDepInt = 1000;
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

    // Calcul Score A
    const scoreA = this.calculScoreGA();
    if (scoreA >= 4380) {
      this.rang = 1;
    } else if (scoreA < 4380 && scoreA >= 4140) {
      this.rang = 2;
    } else if (scoreA < 4140 && scoreA >= 3390) {
      this.rang = 3;
    } else if (scoreA < 3390) {

      // Calcul Score B
      const scoreB = this.calculScoreGB();
      if (scoreB >= 2016) {
        this.rang = 4;
      } else if (this.score < 2016) {

        // Calcul Score C
        const scoreC = this.calculScoreGC();
        if (scoreC >= 1700) {
          this.rang = 5;
        } else if (scoreC < 1700 && scoreC >= 1432) {
          this.rang = 6;
        } else if (scoreC < 1432) {

          // Calcul Score D
          const scoreD = this.calculScoreGD();
          if (scoreD >= 2400) {
            this.rang = 7;
          } else if (scoreD < 2400) {

            // Calcul Score E
            const scoreE = this.calculScoreGD();
            if (scoreE >= 1200) {
              this.rang = 8;
            } else if (scoreE < 1200) {

              // Calcul Score F
              const scoreF = this.calculScoreGF();
              if (scoreF >= 800) {
                this.rang = 10;
              } else if (scoreF < 800) {

                // Calcul Score G
                const scoreG = this.calculScoreGG();
                if (scoreG >= 650) {
                  this.rang = 10;
                } else if (scoreG < 650) {

                  // Calcul Score H
                  const scoreH = this.calculScoreGH();
                  if (scoreH >= 4000) {
                    this.rang = 11;
                  } else if (scoreH < 4000 && scoreH >= 2000) {
                    this.rang = 12;
                  } else if (scoreH < 2000) {
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

  createEvaluation(): any {
    this.calculRang();
    this.calculGir();

    const patientId = this.route.snapshot.paramMap.get('id');
    const scoreEval = this.score;
    const rangEval = this.rang;
    const girEval = this.gir;
    const resultats = this.resultats;

    const evaluation = {
      date: new Date(),
      score: scoreEval,
      gir: girEval,
      rang: rangEval,
      patient: patientId,
      results: resultats
    };

    this.evaluationService.create(evaluation).subscribe((data) => {
      this.router.navigate(['historiquePatient', patientId]);
    }, (err) => {
      console.error(err);
    });
  }
}
