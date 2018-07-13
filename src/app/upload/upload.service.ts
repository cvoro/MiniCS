import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class UploadService {

  private headers = new HttpHeaders({
    'Authorization': localStorage.getItem('token'),
    'Accept': 'application/json',
  });

  constructor(private http: HttpClient) { }

  uploadArrivalFile(formData) {
    return this.http.post(environment.apiBaseUrl + 'arrival', formData, {headers: this.headers})
        .map((res) => res);
  }

  uploadTransferFile(formData) {
    return this.http.post(environment.apiBaseUrl + 'transfer', formData, {headers: this.headers})
        .map((res) => res);
  }
}
