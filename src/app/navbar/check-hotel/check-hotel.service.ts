import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckHotelService {

  constructor(private http: HttpClient) { }

  checkHotel() {
    return this.http.get(environment.apiBaseUrl + 'travelinformation/lc' , {headers: this.jwt()}).map((res: any[]) => res);
  }

  private jwt() {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        });
        return headers;
  }
}
