import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // tslint:disable-next-line:variable-name
  private _url = '';

  constructor(private http: HttpClient) { }

  get url(): string {
    return this._url;
  }

  getResidents(): Promise<any> {
    return this.http.get(this._url, {
    }).toPromise().then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
