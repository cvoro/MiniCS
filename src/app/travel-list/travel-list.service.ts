import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TravelListService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  updateTravelInfo(type) {
    return this.http.put(environment.apiBaseUrl + 'travels', type, {headers: this.headers}).map((res) => res);
  }
  deleteTravelInfo(id) {
    return this.http.delete(environment.apiBaseUrl + 'travels/' + id, {headers: this.headers}).map((res) => res);
  }
  getAllTravelInfo() {
    return this.http.get(environment.apiBaseUrl + 'travels', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
