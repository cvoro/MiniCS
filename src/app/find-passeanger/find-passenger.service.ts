import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindPassengerService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  updatePassengerInfo(type) {
    return this.http.put(environment.apiBaseUrl + 'travelinformation', type, {headers: this.headers}).map((res) => res);
  }
  getPassegerInfo(id) {
    return this.http.get(environment.apiBaseUrl + 'travelinformation/' + id, {headers: this.headers}).map((res) => res);
  }
  getAllPassegerTypes() {
    return this.http.get(environment.apiBaseUrl + 'passengertype', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
