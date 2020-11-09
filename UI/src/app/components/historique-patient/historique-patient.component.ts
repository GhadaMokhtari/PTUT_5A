import { EvaluationService } from './../../services/evaluation.service';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historique-patient',
  templateUrl: './historique-patient.component.html',
  styleUrls: ['./historique-patient.component.scss']
})
export class HistoriquePatientComponent implements OnInit {

  evaluations: any;
  patient: any;

  constructor(
    public patientService: PatientService,
    public evaluationService: EvaluationService,
    public router: Router,
    public route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): any{
    // Récupération de l'id du patient à afficher
    const id = this.route.snapshot.paramMap.get('id');

    this.patientService.get(id).subscribe((data: any) => {
      this.patient = data;
    }, (err) => {
      console.error(err);
    });

    // Récupérer les évaluations
    this.evaluationService.getByPatient(id).subscribe((data: any) => {
      this.evaluations = data;
    }, (err) => {
      console.error(err);
    });
  }

  createEvaluation(): any{
    this.router.navigate(['newEvaluation', this.patient.id]);
  }

  goToBack(): void {
    this.router.navigate(['']);
  }
}
