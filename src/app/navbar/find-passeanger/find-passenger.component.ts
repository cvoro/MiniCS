import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FindPassengerService } from './find-passenger.service';
import { passengerType, PassengerType } from './passenterType';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
  selector: 'app-find-passenger',
  templateUrl: './find-passenger.component.html',
  styleUrls: ['./find-passenger.component.css']
})
export class FindPassangerComponent implements OnInit, OnDestroy {
  bookingID;
  passangersList;
  message = '';

  passanger = passengerType;

  popUpMessages = {
    passengerUpdated: '',
    passengerNotUpdated: '',
    passengerNotFound: '',
    passengerTypesNotLoaded: ''
  };
  options: any[];

  // date: Date = new Date();
	settings = {
		bigBanner: true,
		timePicker: true,
    format: 'dd-MMM-yyyy hh:mm a',
		defaultOpen: false
	};


  constructor(private toastr: ToastrService,
              private translate: TranslateService,
              private findPassengerService: FindPassengerService) {
    if (localStorage.getItem('bookingID') !== 'undefined') {
      this.findPassanger(localStorage.getItem('bookingID'));
    }
    this.findPassengerService.getAllPassegerTypes().subscribe(
      done => this.options = done,
      err => this.toastr.error(this.popUpMessages.passengerTypesNotLoaded)
    );
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslations();
    });
    this.getTranslations();

    // prevent console error for getMonth()
    DatePicker.prototype.ngOnInit = function() {
      this.settings = Object.assign(this.defaultSettings, this.settings);
      if (this.settings.defaultOpen) {
      this.popover = true;
      }
      this.date = new Date();
      };
   }

   ngOnInit() {
    this.passanger = passengerType;

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

  onDateSelect(event) {
    this.passanger.pickup_time = event.toISOString();
  }

  savePassengerInfo() {
   this.findPassengerService.updatePassengerInfo(this.passanger).subscribe(
     done => {
       this.passanger = done;
       if (!this.passanger['lC_First_Name'] && !this.passanger['lC_Last_Name']) {
         this.passanger['lC_First_Name'] = 'Not';
         this.passanger['lC_Last_Name'] = 'selected';
        }
        this.toastr.success(this.popUpMessages.passengerUpdated);
      },
      err => {
        this.toastr.error(this.popUpMessages.passengerNotUpdated);
      }
    );
  }

  findPassanger(bookingID) {
    this.findPassengerService.getPassegerInfo(bookingID).subscribe(
      done => {
        this.passanger = done;
        if (!this.passanger['lC_First_Name'] && !this.passanger['lC_Last_Name']) {
         this.passanger['lC_First_Name'] = 'Not';
         this.passanger['lC_Last_Name'] = 'selected';
       }
      },
      err => {
        this.toastr.error(this.popUpMessages.passengerNotFound);
      }
    );
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
    this.translate.get('find-passenger-pop-up.label-passenger-types-not-loaded').subscribe(
      done => this.popUpMessages.passengerTypesNotLoaded = done
    );
  }

  ngOnDestroy() {
    this.passanger = passengerType;
    localStorage.setItem('bookingID', undefined);
  }

}
