import { Component, OnInit } from '@angular/core';
import { data } from '../travel-list/excelMock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-hotel',
  templateUrl: './check-hotel.component.html',
  styleUrls: ['./check-hotel.component.css']
})
export class CheckHotelComponent implements OnInit {
  data = data;
  loggedUser;
  passanger = {};
  constructor(private router: Router) {
    this.loggedUser = localStorage.getItem('loggedInAs');
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Pax_Name === this.loggedUser) {
        this.passanger = this.data[i];
      }
    }
  }

  ngOnInit() {
  }

  sendBookingID(bookignID) {
    localStorage.setItem('bookingID', bookignID);
    this.router.navigate(['/find-passanger']);
  }
}
