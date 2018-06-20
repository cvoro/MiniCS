import { Component, OnInit } from '@angular/core';
import { hotels, pax } from './leisureMock';

@Component({
  selector: 'app-leisure-consultants',
  templateUrl: './leisure-consultants.component.html',
  styleUrls: ['./leisure-consultants.component.css']
})
export class LeisureConsultantsComponent implements OnInit {
hotelsList = hotels;
leisureConsultantsList = pax;

consultant = {
  username: '',
  password: '',
  firstName: '',
  lastName: ''
};

addedConslutants = [];
  constructor() {}

  public settings = {
    columns: {
      firstName: {
         title: 'First name'
      },
      lastName: {
        title: 'Last name'
      },
      username: {
        title: 'Username'
      },
      password: {
       title: 'Password'
      }
    }
  };

  ngOnInit() {

  }

  addConsultant(consultant) {
    this.addedConslutants.push(consultant);
    console.log(this.addedConslutants);
  }

}
