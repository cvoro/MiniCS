import { Component, OnInit } from '@angular/core';
import { settings } from './settings';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonComponent } from './button/button.component';
import { TravelListService } from './travel-list.service';
import { ToastrService } from 'ngx-toastr';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownService } from './dropdown/dropdown.service';
import { UserStateComponent } from './user-state/user-state.component';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  data;
  options = [];
  settings;

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
              private toastr: ToastrService,
              private dropdownService: DropdownService) {
                this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                    this.getTranslations();
                });
                this.getTranslations();

                this.travelService.getAllTravelInfo().subscribe(
                  done => {
                    this.data = done;
                    // console.log(done);
                  },
                  err => {
                    this.toastr.error(this.popUpMessages.travelsNotLoaded);
                  }
                );

                this.dropdownService.getAllPassegerTypes().subscribe(
                  done => {
                    done.forEach(element => {
                      this.options.push({
                        value: element.id,
                        title: element.name
                      });
                    });
                    this.settings = this.addSettings();
                    // console.log(this.options);
                  },
                  err => {
                    this.toastr.error('Passenger types not loaded');
                    this.settings = this.addSettings();
                  }
                );


               }


  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  addSettings() {
    return {
      add: {
        addButtonContent: '<i class="fas fa-plus"></i>',
        createButtonContent: '<i class="fas fa-check"></i>',
        cancelButtonContent: '<i class="fas fa-ban"></i>',
      },
      edit: {
        editButtonContent: '<i class="fas fa-pencil-alt"></i>',
        saveButtonContent: '<i class="fas fa-check"></i>',
        cancelButtonContent: '<i class="fas fa-times"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="fas fa-ban" ></i>',
        confirmDelete: true,
      },
      columns: {
        id: {
           title: 'ID',
           editable: false
        },
        booking_Id: {
           title: 'Booking ID',
           editable: false
         },
        booking_Date: {
           title: 'Booking Date',
           editable: false
           },
        hotel_Name: {
           title: 'Hotel Name',
           editable: false
         },
        pax_Name: {
             title: 'Pax Name',
             editable: false
        },
        number_Of_Pax: {
             title: 'No. Of Pax',
             editable: false
        },
        supplier_Reference: {
             title: 'Supplier reference',
             editable: false
        },
        room_Type: {
             title: 'Room type',
             editable: false
        },
        number_Of_Rooms: {
             title: 'Number of rooms',
             editable: false
        },
        leisure_Consultants: {
             title: 'Leisure Consultants',
             editable: false
        },
        contact_Number: {
             title: 'Contact number'
        },
        room_Number: {
             title: 'Room number'
        },
        passenger_Type: {
          title: 'Passenger type',
          type: 'custom',
          renderComponent: DropdownComponent,
          editor: {
            type: 'list',
            config: {
              list: this.options  // a list to populate the options
            }
          }
        },
        check_By_Rep: {
          title: 'Check by REP',
          type: 'custom',
          renderComponent: ButtonComponent,
          editor: {
            type: 'checkbox'
          }
        },
        check_By_Lc: {
          title: 'Check by LC',
          type: 'custom',
          renderComponent: ButtonComponent,
          editor: {
            type: 'checkbox'
          }
        },
        pickup_time: {
             title: 'Pick up time'
        },
        state: {
             title: 'Current state',
             type: 'custom',
            renderComponent: UserStateComponent,
             editable: false
        },
        remarks_Field: {
             title: 'Remarks field'
        },
        leaving_From: {
             title: 'Leaving From',
             editable: false
        },
        supplier_Arrival: {
             title: 'Supplier arrival',
             editable: false
        },
        datetime_Arrival: {
             title: 'Date & Time  arrival',
             editable: false
        },
        terminal_Arrival: {
             title: 'Terminal  arrival',
             editable: false
        },
        car_Name_Arrival: {
             title: 'Car Name arrival',
             editable: false
        },
        car_Transfer_Type_Arrival: {
             title: 'Car Transfer Type arrival',
             editable: false
        },
        airline_Arrival: {
             title: 'Airline arrival',
             editable: false
        },
        flightNo_Arrival: {
             title: 'Flight No. arrival',
             editable: false
        },
        going_To: {
             title: 'Going To',
             editable: false
        },
        supplier_Departure: {
             title: 'Supplier departure',
             editable: false
        },
        datetime_Departure: {
             title: 'Date & Time departure',
             editable: false
        },
        terminal_Departure: {
             title: 'Terminal departure',
             editable: false
        },
        car_Name_Departure: {
             title: 'Car Name departure',
             editable: false
        },
        car_Transfer_Type_Departure: {
             title: 'Car Transfer Type departure',
             editable: false
        },
        airline_Departure: {
             title: 'Airline departure',
             editable: false
        },
        flightNo_Departure: {
             title: 'Flight No. departure',
             editable: false
        }
          }
      };
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
    // console.log(event);
    this.travelService.deleteTravelInfo(event.data).subscribe(
      done => {
        event.confirm.resolve(event.source.data);
        this.toastr.success(this.popUpMessages.rowDeleted);
      },
      err => {
        this.toastr.error(this.popUpMessages.rowNotDelted);
      }
    );
  }

  updateRecord(event) {
    // console.log(event);
    this.travelService.updateTravelInfo(event.newData).subscribe(
      done => {
        event.confirm.resolve(event.newData);
        this.toastr.success(this.popUpMessages.rowUpdated);
      },
      err => {
        this.toastr.error(this.popUpMessages.rowNotUpdated);
      }
    );
  }

  rowSelected(event) {
    // console.log(event);
  }

}
