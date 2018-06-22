import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  changeDirection(lang) {
    let items = document.getElementById('example-text-input');
      if (lang === 'en_UK') {
        items.style.direction = 'ltr';
      } else {
        items.style.direction = 'rtl';
      }
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
