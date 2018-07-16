import { Component, OnInit } from '@angular/core';
import { hotels, pax } from '../leisure-consultants/leisureMock';
import { FilterPipe } from 'ngx-filter-pipe';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HotelsService } from './hotels.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelsList = [];
  leisureConsultantsList;
  searchText: any = { hotel_Name: '' };

  popUpMessages = {
    consultantListNotLoaded: '',
    hotelsNotLoaded: '',
    consultantUpdated: '',
    consultantNotUpdated: ''
  };
  constructor(private filterPipe: FilterPipe,
              private translate: TranslateService,
              private hotelsService: HotelsService,
              private toastr: ToastrService) {
              this.hotelsService.getAllHotels().subscribe(
                done => {
                    this.hotelsList = done,
                    console.log(done),
                    this.hotelsList.sort(this.dynamicSort('hotel_Name'));
                    this.hotelsService.getAllConsultants().subscribe(
                      consultants => {
                              this.leisureConsultantsList = consultants,
                              console.log(consultants);
                            },
                      err => this.toastr.warning(this.popUpMessages.consultantListNotLoaded)
                    );
                },
                err => this.toastr.warning(this.popUpMessages.hotelsNotLoaded)
              );

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

  getTranslations() {
    this.translate.get('hotels-pop-up.label-consultant-updated').subscribe(
      done => this.popUpMessages.consultantUpdated = done
    );
    this.translate.get('hotels-pop-up.label-consultant-not-updated').subscribe(
      done => this.popUpMessages.consultantNotUpdated = done
    );
    this.translate.get('hotels-pop-up.label-consultants-not-loaded').subscribe(
      done => this.popUpMessages.consultantListNotLoaded = done
    );
    this.translate.get('hotels-pop-up.label-hotels-not-loaded').subscribe(
      done => this.popUpMessages.hotelsNotLoaded = done
    );
  }

  changeDirection(lang) {
    const items = document.getElementById('example-search-input');
      if (lang === 'en_UK') {
        items.style.direction = 'ltr';
      } else {
        items.style.direction = 'rtl';
      }
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
  }

  consultantChanged(user_Id, hotel) {
    let data = {
      'id': hotel.id,
      'user_Id': Number(user_Id)
    };
    console.log(data);
    this.hotelsService.updateLeisureConsultant(data).subscribe(
      done => this.toastr.success(this.popUpMessages.consultantUpdated),
      err => this.toastr.error(this.popUpMessages.consultantNotUpdated)
    );
  }
}
