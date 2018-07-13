import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckHotelService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  checkHotel() {
    return this.http.get(environment.apiBaseUrl + 'checkhotel' , {headers: this.headers}).map((res) => res);
  }
}
