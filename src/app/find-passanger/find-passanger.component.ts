import { Component, OnInit } from '@angular/core';
import { data } from '../travel-list/excelMock';

@Component({
  selector: 'app-find-passanger',
  templateUrl: './find-passanger.component.html',
  styleUrls: ['./find-passanger.component.css']
})
export class FindPassangerComponent implements OnInit {
  bookingID;
  passangersList = data;

  passanger = {};
  constructor() {
    this.findPassanger(localStorage.getItem('bookingID'));
   }

  ngOnInit() {
  }

  findPassanger(bookingID) {
    for (let i = 0; i < this.passangersList.length; i++) {
        if (this.passangersList[i].Booking_Id === bookingID) {
          console.log(this.passangersList[i]);
          this.passanger = this.passangersList[i];
        }
    }
  }

}
