import { Component, OnInit, OnDestroy } from '@angular/core';
import { data } from '../travel-list/excelMock';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-find-passanger',
  templateUrl: './find-passanger.component.html',
  styleUrls: ['./find-passanger.component.css']
})
export class FindPassangerComponent implements OnInit, OnDestroy {
  bookingID;
  passangersList = data;
  message = '';

  passanger = {};
  constructor(private toastr: ToastrService, private translate: TranslateService) {
    console.log(localStorage.getItem('bookingID'));
    
    if (localStorage.getItem('bookingID') != 'undefined') {
      this.findPassanger(localStorage.getItem('bookingID'));
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

  savePassengerInfo() {
    setTimeout(() => {
      this.toastr.success('Passenger data updated!');
    }, 1000);
  }

  findPassanger(bookingID) {
    this.passanger = {};
    for (let i = 0; i < this.passangersList.length; i++) {
        if (this.passangersList[i].Booking_Id === bookingID) {
          console.log(this.passangersList[i]);
          this.passanger = this.passangersList[i];
        }
    }

    if (Object.keys(this.passanger).length === 0) {
        this.toastr.error('No passenger found with that booking ID!');
        this.passanger = {};
    } else {
      this.message = '';
    }
  }

  ngOnDestroy() {
    this.passanger = {};
    localStorage.setItem('bookingID', undefined)
  }

}
