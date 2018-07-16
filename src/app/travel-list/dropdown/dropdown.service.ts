import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  getAllPassegerTypes() {
    return this.http.get(environment.apiBaseUrl + 'passengertype', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
