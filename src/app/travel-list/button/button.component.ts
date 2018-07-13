import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  public renderValue;
  
  @Input() value;

  constructor() {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  example() {
    this.value = !this.value;
    alert(this.value);
  }

}
