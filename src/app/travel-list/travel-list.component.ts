import { Component, OnInit } from '@angular/core';
import {settings, data} from './excelMock';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  // settings = settings;
  data = data;
  
  constructor(private _sanitizer: DomSanitizer) { 


    
  }

  public settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
         columns: {
      ID: {
         title: 'ID'
      },
      Booking_Id: {
         title: 'Booking ID'
       },
      Booking_Date: {
         title: 'Booking Date'
         },
      Hotel_Name: {
         title: 'Hotel Name'
       },
      Pax_Name: {
           title: 'Pax Name'
      },
      Number_Of_Pax: {
           title: 'No. Of Pax'
      },
      Supplier_reference: {
           title: 'Supplier reference'
      },
      Room_type: {
           title: 'Room type'
      },
      Number_of_rooms: {
           title: 'Number of rooms'
      },
      Leasuremant_customer: {
           title: 'Leasuremant customer'
      },
      Contact_number: {
           title: 'Contact number'
      },
      Room_number: {
           title: 'Room number'
      },
      Passenger_type: {
           title: 'Passenger type'
    },
    Check_by_REP: {
      title: 'Check by REP',
      type: 'html',
      editor: {
        type: 'checkbox'
      },
      valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
      filter: false
      },
      Check_by_LC: {
      title: 'Check by LC',
      type: 'html',
      editor: {
        type: 'checkbox'
      },
      valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
      filter: false
      },
      // Check_by_REP: {
      //      title: 'Check by REP'
      // },
      // Check_by_LC: {
      //      title: 'Check by LC'
      // },
      Leaving_From: {
           title: 'Leaving From'
      },
      Supplier_Arrival: {
           title: 'Supplier'
      },
      DateTime_Arrival: {
           title: 'Date & Time'
      },
      Terminal_Arrival: {
           title: 'Terminal'
      },
      Car_Name_Arrival: {
           title: 'Car Name'
      },
      Car_Transfer_Type_Arrival: {
           title: 'Car Transfer Type'
      },
      Airline_Arrival: {
           title: 'Airline'
      },
      FlightNo_Arrival: {
           title: 'Flight No.'
      },
      Going_to: {
           title: 'Going To'
      },
      Supplier_Departure: {
           title: 'Supplier'
      },
      DateTime_Departure: {
           title: 'Date & Time'
      },
      Terminal_Departure: {
           title: 'Terminal'
      },
      Car_Name_Departure: {
           title: 'Car Name'
      },
      Car_Transfer_Type_Departure: {
           title: 'Car Transfer Type'
      },
      Airline_Departure: {
           title: 'Airline'
      },
      FlightNo_Departure: {
           title: 'Flight No.'
      }
        }
    };
  public input: string = '<input type="checkbox">';

  ngOnInit() {
  }

}
