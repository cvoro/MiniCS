import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

export  const settings = {
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
         title: 'ID'
      },
      booking_Id: {
         title: 'Booking ID'
       },
      booking_Date: {
         title: 'Booking Date'
         },
      hotel_Name: {
         title: 'Hotel Name'
       },
      pax_Name: {
           title: 'Pax Name'
      },
      number_Of_Pax: {
           title: 'No. Of Pax'
      },
      supplier_Reference: {
           title: 'Supplier reference'
      },
      room_Type: {
           title: 'Room type'
      },
      number_Of_Rooms: {
           title: 'Number of rooms'
      },
      leisure_Consultants: {
           title: 'Leisure Consultants'
      },
      contact_Number: {
           title: 'Contact number'
      },
      room_Number: {
           title: 'Room number'
      },
    //   passenger_Type: {
    //        title: 'Passenger type'
    // },
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
    // Check_by_REP: {
    //   title: 'Check by REP',
    //   type: 'html',
    //   editor: {
    //     type: 'checkbox'
    //   },
    //   valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
    //   filter: false
    //   },
      // Check_by_LC: {
      // title: 'Check by LC',
      // type: 'html',
      // editor: {
      //   type: 'checkbox',
      //   config: {
      //     true: 'true'
      //   }
      // },
      // valuePrepareFunction: (value) => { return this._sanitizer.bypassSecurityTrustHtml(this.input); },
      // filter: false
      // },
      // Check_by_REP: {
      //   title: 'Check by LC',
      //   type: 'text',
      //   defaultValue: false,
      //   editor: {
      //     type: 'checkbox',
      //     config: {
      //       true: 'Selektovan',
      //       false: 'Nije selektovan'
      //     }
      //   }
      // },
      // Check_by_LC: {
      //   title: 'Check by LC',
      //   type: 'text',
      //   defaultValue: false,
      //   editor: {
      //     type: 'checkbox',
      //     config: {
      //       true: 'Selektovan',
      //       false: 'Nije selektovan'
      //     }
      //   }
      // },
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
      leaving_From: {
           title: 'Leaving From'
      },
      supplier_Arrival: {
           title: 'Supplier'
      },
      datetime_Arrival: {
           title: 'Date & Time'
      },
      terminal_Arrival: {
           title: 'Terminal'
      },
      car_Name_Arrival: {
           title: 'Car Name'
      },
      car_Transfer_Type_Arrival: {
           title: 'Car Transfer Type'
      },
      airline_Arrival: {
           title: 'Airline'
      },
      flightNo_Arrival: {
           title: 'Flight No.'
      },
      going_To: {
           title: 'Going To'
      },
      supplier_Departure: {
           title: 'Supplier'
      },
      dateTime_Departure: {
           title: 'Date & Time'
      },
      terminal_Departure: {
           title: 'Terminal'
      },
      car_Name_Departure: {
           title: 'Car Name'
      },
      car_Transfer_Type_Departure: {
           title: 'Car Transfer Type'
      },
      airline_Departure: {
           title: 'Airline'
      },
      flightNo_Departure: {
           title: 'Flight No.'
      }
        }
    };