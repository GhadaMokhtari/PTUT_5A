import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../../services/evaluation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recapitulatif-grille',
  templateUrl: './recapitulatif-grille.component.html',
  styleUrls: ['./recapitulatif-grille.component.scss']
})
export class RecapitulatifGrilleComponent implements OnInit {

  evaluation;
  results;

  constructor(
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const evaluationId = this.route.snapshot.paramMap.get('idEval');
    this.evaluationService.get(evaluationId).subscribe(data => {
      this.evaluation = data;
      this.results = data.results;
    });
  }

  goBackToHistoric(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['historiquePatient', patientId]);
  }
}