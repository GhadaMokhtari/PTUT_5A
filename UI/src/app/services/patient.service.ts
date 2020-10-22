import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  create(patient): any{
    return this.http.post(`${environment.api}/patients`, patient);
  }

  getAll(): any{
    return this.http.get(`${environment.api}/patients`);
  }

  get(id): any{
    return this.http.get(`${environment.api}/patients/` + id);
  }

}
