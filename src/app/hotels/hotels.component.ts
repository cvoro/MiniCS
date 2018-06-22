import { Component, OnInit } from '@angular/core';
import { hotels, pax } from '../leisure-consultants/leisureMock';
import { FilterPipe } from 'ngx-filter-pipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelsList = hotels;
  leisureConsultantsList = pax;
  searchText: any = { Hotel: '' };
  constructor(private filterPipe: FilterPipe, private translate: TranslateService) {
    // console.log(filterPipe.transform(this.hotelsList, { Hotel: 'F'}));
    this.hotelsList.sort(this.dynamicSort("Hotel"));
   }
   

   ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  changeDirection(lang) {
    let items = document.getElementById('example-search-input');
      if (lang === 'en_UK') {
        items.style.direction = 'ltr';
      } else {
        items.style.direction = 'rtl';
      }
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  check() {
    // this.hotelsList = this.filterPipe.transform(this.hotelsList, this.searchText);
    // console.log(this.hotelsList);
    // console.log(this.filterPipe.transform(this.hotelsList, this.searchText));
  }

}
