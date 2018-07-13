import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PassengerTypeService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  addNewPassengerType(type) {
    return this.http.post(environment.apiBaseUrl + 'passengertype', type, {headers: this.headers}).map((res) => res);
  }
  updatePassengerType(type) {
    return this.http.put(environment.apiBaseUrl + 'passengertype', type, {headers: this.headers}).map((res) => res);
  }
  deletePassagerType(id) {
    return this.http.delete(environment.apiBaseUrl + 'passengertype/' + id, {headers: this.headers}).map((res) => res);
  }
  getAllPassegerTypes() {
    return this.http.get(environment.apiBaseUrl + 'passengertype', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
