import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LeisureConsultantsService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  addNewLeisureConsultant(type) {
    return this.http.post(environment.apiBaseUrl + 'lc', type, {headers: this.headers}).map((res) => res);
  }
  updateLeisureConsultant(type) {
    return this.http.put(environment.apiBaseUrl + 'lc', type, {headers: this.headers}).map((res) => res);
  }
  deleteLeisureConsultant(id) {
    return this.http.delete(environment.apiBaseUrl + 'lc/' + id, {headers: this.headers}).map((res) => res);
  }
  getAllLeisureConsultants() {
    return this.http.get(environment.apiBaseUrl + 'lc', {headers: this.headers}).map((res: Array<any>) => res);
  }
}
