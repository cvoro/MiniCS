import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class HotelsService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  updateLeisureConsultant(type) {
    return this.http.put(environment.apiBaseUrl + 'hotel', type, {headers: this.headers}).map((res) => res);
  }

  getAllHotels() {
    return this.http.get(environment.apiBaseUrl + 'hotel', {headers: this.headers}).map((res: Array<any>) => res);
  }

  getAllConsultants() {
    return this.http.get(environment.apiBaseUrl + 'lc', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
