import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(public http: HttpClient) { }

  create(evaluation): any{
    return this.http.post(`${environment.api}/evaluations`, evaluation);
  }

  get(id): any{
    return this.http.get(`${environment.api}/evaluations/` + id);
  }

  getByPatient(id): any{
    return this.http.get(`${environment.api}/evaluations/patient/` + id);
  }
}

