import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-state',
  templateUrl: './user-state.component.html',
  styleUrls: ['./user-state.component.css']
})
export class UserStateComponent implements OnInit {

  @Input() value;

  states = {
    UNAUTORIZE: {
      value: 'Not registred',
      color: 'gray'
    },
    NOT_AVAILABLE: {
      value: 'Registred',
      color: 'black'
    },
    AVAILABLE: {
      value: 'Transfer message sent!',
      color: 'yellow'
    },
    ACCEPT_TRANSFER: {
      value: 'Transfer accepted!',
      color: 'green'
    },
    CONFIRM_DECLINE: {
      value: 'Transfer confirm declined',
      color: 'black'
    },
    DECLINE_TRANSFER: {
      value: 'Transfer declined!',
      color: 'red'
    },
    PICKUP_TIME: {
      value: 'Pickup time requested',
      color: 'black'
    },
    CUSTOMER_SERVICE: {
      value: 'Customer service contacted',
      color: 'black'
    },
    NULL: {
      value: 'Not defined',
      color: 'black'
    },
    SUEVEY_STATE: {
      value: 'Suervey answering',
      color: 'black'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
