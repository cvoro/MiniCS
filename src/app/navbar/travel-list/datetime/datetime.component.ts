import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DateTimeComponent implements OnInit {

  @Input()
  value;

  constructor() { }

  ngOnInit() {
  }

}
