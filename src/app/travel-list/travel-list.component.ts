import { Component, OnInit } from '@angular/core';
import { settings, data } from './excelMock';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonComponent } from './button/button.component';
import { TravelListService } from './travel-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  // settings = settings;
  data;

  popUpMessages = {
    rowUpdated: '',
    rowNotUpdated: '',
    rowDeleted: '',
    rowNotDelted: '',
    travelsNotLoaded: ''
  };

  constructor(private _sanitizer: DomSanitizer,
              private translate: TranslateService,
              private travelService: TravelListService,
              private toastr: ToastrService) {
                this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                    this.getTranslations();
                });
                this.getTranslations();

                this.travelService.getAllTravelInfo().subscribe(
                  done => {
                    this.data = done;
                  },
                  err => {
                    this.toastr.error(this.popUpMessages.travelsNotLoaded);
                  }
                )
               }

  public settings = settings;
  // public input: string = '<input type="checkbox">';

  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  getTranslations() {
    this.translate.get('travel-list-pup-up.label-row-deleted').subscribe(
      done => this.popUpMessages.rowDeleted = done
    );
    this.translate.get('travel-list-pup-up.label-row-not-deleted').subscribe(
      done => this.popUpMessages.rowNotDelted = done
    );
    this.translate.get('travel-list-pup-up.label-row-updated').subscribe(
      done => this.popUpMessages.rowUpdated = done
    );
    this.translate.get('travel-list-pup-up.label-row-updated').subscribe(
      done => this.popUpMessages.rowNotUpdated = done
    );
    this.translate.get('travel-list-pup-up.label-travels-not-loaded').subscribe(
      done => this.popUpMessages.travelsNotLoaded = done
    );
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

  // TABLE ACTIONS
  deleteRecord(event) {
    console.log(event);
    this.travelService.deleteTravelInfo(event.data).subscribe(
      done => {
        event.confirm.resolve(event.source.data);
        this.toastr.success(this.popUpMessages.rowDeleted);
      },
      err => {
        this.toastr.success(this.popUpMessages.rowNotDelted);
      }
    );
  }

  updateRecord(event) {
    console.log(event);
    this.travelService.updateTravelInfo(event.newData).subscribe(
      done => {
        event.confirm.resolve(event.newData);
        this.toastr.success(this.popUpMessages.rowUpdated);
      },
      err => {
        this.toastr.success(this.popUpMessages.rowNotUpdated);
      }
    );
  }

  rowSelected(event) {
    console.log(event);
  }

}
