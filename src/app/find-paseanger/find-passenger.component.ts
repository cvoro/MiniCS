import { Component, OnInit, OnDestroy } from '@angular/core';
import { data } from '../travel-list/excelMock';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FindPassengerService } from './find-passenger.service';

@Component({
  selector: 'app-find-passenger',
  templateUrl: './find-passenger.component.html',
  styleUrls: ['./find-passenger.component.css']
})
export class FindPassangerComponent implements OnInit, OnDestroy {
  bookingID;
  passangersList = data;
  message = '';

  passanger = {};

  popUpMessages = {
    passengerUpdated: '',
    passengerNotUpdated: '',
    passengerNotFound: ''
  };

  constructor(private toastr: ToastrService,
              private translate: TranslateService,
              private findPassengerService: FindPassengerService) {
    // console.log(localStorage.getItem('bookingID'));
    
    if (localStorage.getItem('bookingID') != 'undefined') {
      this.findPassanger(localStorage.getItem('bookingID'));
    }
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslations();
    });
    this.getTranslations();
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
   this.findPassengerService.updatePassengerInfo(this.passanger).subscribe(
     done => {
       this.toastr.success(this.popUpMessages.passengerUpdated);
       this.passanger = done;
      },
      err => {
        this.toastr.error(this.popUpMessages.passengerNotUpdated);
      }
    );
  }

  findPassanger(bookingID) {

    this.findPassengerService.getPassegerInfo(bookingID).subscribe(
      done => {
        console.log(done);
      },
      err => {
        this.toastr.error(this.popUpMessages.passengerNotFound);
      }
    );
    // this.passanger = {};
    // for (let i = 0; i < this.passangersList.length; i++) {
    //     if (this.passangersList[i].Booking_Id === bookingID) {
    //       console.log(this.passangersList[i]);
    //       this.passanger = this.passangersList[i];
    //     }
    // }

    // if (Object.keys(this.passanger).length === 0) {
    //     this.toastr.error('No passenger found with that booking ID!');
    //     this.passanger = {};
    // } else {
    //   this.message = '';
    // }
  }

  getTranslations() {
    this.translate.get('find-passenger-pop-up.label-passenger-updated').subscribe(
      done => this.popUpMessages.passengerUpdated = done
    );
    this.translate.get('find-passenger-pop-up.label-passenger-not-updated').subscribe(
      done => this.popUpMessages.passengerNotUpdated = done
    );
    this.translate.get('find-passenger-pop-up.label-passenger-not-found').subscribe(
      done => this.popUpMessages.passengerNotFound = done
    );
  }

  ngOnDestroy() {
    this.passanger = {};
    localStorage.setItem('bookingID', undefined);
  }

}
