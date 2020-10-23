import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-resident',
  templateUrl: './liste-resident.component.html',
  styleUrls: ['./liste-resident.component.scss']
})
export class ListeResidentComponent implements OnInit {


   patients;

  constructor(
    public patientService: PatientService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): any{
     this.patientService.getAll().subscribe((data: any) => {
      this.patients = data;
    }, (err) => {
      console.error(err);
    });
  }

  goToHistoric(patient): any{
    this.router.navigate(['/historiquePatient/', patient.id]);
  }

}
