import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  tabs = [{title: '', target: ''}];
  selected = 0;


  coherenceModality: string;

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
    this.coherenceModality = event;
    console.log('grille coherence', this.coherenceModality);
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
}
