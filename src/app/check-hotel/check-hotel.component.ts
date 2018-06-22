import { Component, OnInit } from '@angular/core';
import { data } from '../travel-list/excelMock';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-check-hotel',
  templateUrl: './check-hotel.component.html',
  styleUrls: ['./check-hotel.component.css']
})
export class CheckHotelComponent implements OnInit {
  data = data;
  loggedUser;
  passanger = {};
  constructor(private router: Router, private translate: TranslateService) {
    this.loggedUser = localStorage.getItem('loggedInAs');
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Pax_Name === this.loggedUser) {
        this.passanger = this.data[i];
      }
    }
  }

  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  changeDirection(lang) {
    let items = document.getElementsByTagName('input');
    for (let i = 0; i < items.length; i++) {
      if (lang === 'en_UK') {
        items[i].style.direction = 'ltr';
      } else {
        items[i].style.direction = 'rtl';
      }
    }
  }
  sendBookingID(bookignID) {
    localStorage.setItem('bookingID', bookignID);
    this.router.navigate(['/find-passenger']);
  }
}
