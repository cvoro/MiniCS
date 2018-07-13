import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(environment.apiBaseUrl + 'login', data, {headers: this.headers}).map((response) => response);
  }
}
