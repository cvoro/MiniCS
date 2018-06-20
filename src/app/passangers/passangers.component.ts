import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passangers',
  templateUrl: './passangers.component.html',
  styleUrls: ['./passangers.component.css']
})
export class PassangersComponent implements OnInit {
  type;
  list = [];
  editType;
  editButtonClicked = false;
  editIndex;
  constructor() { }

  ngOnInit() {
  }

  addType(type) {
    this.list.push(type);
  }

  delete(i) {
    this.list.splice(i, 1);
  }

  edit(i) {
    this.editIndex = i;
    this.editButtonClicked = true;
    this.type = this.list[i];
  }

  save() {
    this.list[this.editIndex] = this.type;
    this.editButtonClicked = false;
    this.type = '';
  }

}
