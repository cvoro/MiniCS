import { Component, OnInit } from '@angular/core';
import { hotels, pax } from './leisureMock';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {}

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
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  changeDirection(lang) {
    let items = document.getElementsByTagName('th');
    for (let i = 0; i < items.length; i++) {
      if (lang === 'en_UK') {
        items[i].style.direction = 'ltr';
      } else {
        items[i].style.direction = 'rtl';
      }
    }
  }

  addConsultant(consultant) {
    this.addedConslutants.push(consultant);
    console.log(this.addedConslutants);
  }

}
