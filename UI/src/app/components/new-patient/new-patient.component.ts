import { Router, RouterModule } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  constructor(
    public patientService: PatientService,
    public router: Router,
    ) { }

    currentDate = new Date();
  patient = {
    nom : '',
    prenom: '',
    dateNaissance: ''
  };

  ngOnInit(): void {
  }

  create(): any{
    this.patientService.create(this.patient).subscribe((data: any) => {
      this.router.navigate(['/']);
    }, (err) => {
      console.error(err);
    });
    console.log('nom', this.patient.nom);
    console.log('datenaiss', this.patient.dateNaissance);
  }

}
