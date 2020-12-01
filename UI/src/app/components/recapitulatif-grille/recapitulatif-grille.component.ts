import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../../services/evaluation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recapitulatif-grille',
  templateUrl: './recapitulatif-grille.component.html',
  styleUrls: ['./recapitulatif-grille.component.scss']
})
export class RecapitulatifGrilleComponent implements OnInit {

  constructor(
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goBackToHistoric(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['historiquePatient', patientId]);
  }
}
