import { Component, OnInit } from '@angular/core';
import { hotels, pax } from '../leisure-consultants/leisureMock';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelsList = hotels;
  leisureConsultantsList = pax;
  searchText: any = { Hotel: '' };
  constructor(private filterPipe: FilterPipe) {
    // console.log(filterPipe.transform(this.hotelsList, { Hotel: 'F'}));
   }

  ngOnInit() {
  }

  check() {
    // this.hotelsList = this.filterPipe.transform(this.hotelsList, this.searchText);
    // console.log(this.hotelsList);
    // console.log(this.filterPipe.transform(this.hotelsList, this.searchText));
  }

}
