import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pick-up-time',
  templateUrl: './pick-up-time.component.html',
  styleUrls: ['./pick-up-time.component.css']
})
export class PickUpTimeComponent implements OnInit {

  @Input()
  value;

  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MMM-yyyy hh:mm a',
    defaultOpen: false
  };

  constructor() { }

  ngOnInit() {
  }

  onDateSelect(event) {
    this.value = event.toISOString();
    localStorage.setItem('newDate', this.value);
  }

}
