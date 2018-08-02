import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { PassengerTypeService } from './passenger-type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-passangers',
  templateUrl: './passengers-type.component.html',
  styleUrls: ['./passengers-type.component.css']
})
export class PassangersComponent implements OnInit {
  passengerType = {
    id: '',
    name: ''
  };
  passengerTypeList = [];
  editButtonClicked = false;
  editIndex;

  popUpMessages = {
    typeNotLoaded: '',
    typeAdded: '',
    typeNotAdded: '',
    typeDeleted: '',
    typeNotDeleted: '',
    typeUpdated: '',
    typeNotUpdated: '',
    enterNotEntered: ''
  };

  constructor(private translate: TranslateService,
              private passengerTypeService: PassengerTypeService,
              private toastr: ToastrService) {
      passengerTypeService.getAllPassegerTypes().subscribe(
        done => {this.passengerTypeList = done;
          // , console.log(done);
         },
        error => {this.toastr.warning('Passenger types not loaded!') }
      );

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.getTranslations();
      });
      this.getTranslations();
   }

  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
  }

  getTranslations() {
    this.translate.get('passenger-type-pop-up.label-passenger-not-loaded').subscribe(
      done => this.popUpMessages.typeNotLoaded = done
    );
    this.translate.get('passenger-type-pop-up.label-new-passenger-added').subscribe(
      done => this.popUpMessages.typeAdded = done
    );
    this.translate.get('passenger-type-pop-up.label-new-passenger-not-added').subscribe(
      done => this.popUpMessages.typeNotAdded = done
    );
    this.translate.get('passenger-type-pop-up.label-passenger-type-deleted').subscribe(
      done => this.popUpMessages.typeDeleted = done
    );
    this.translate.get('passenger-type-pop-up.label-passenger-type-not-deleted').subscribe(
      done => this.popUpMessages.typeNotDeleted = done
    );
    this.translate.get('passenger-type-pop-up.label-passenger-type-updated').subscribe(
      done => this.popUpMessages.typeUpdated = done
    );
    this.translate.get('passenger-type-pop-up.label-passenger-type-not-updated').subscribe(
      done => this.popUpMessages.typeNotUpdated = done
    );
    this.translate.get('passenger-type-pop-up.label-value-not-entered').subscribe(
      done => this.popUpMessages.enterNotEntered = done
    );
  }

  changeDirection(lang) {
    let items = document.getElementById('example-text-input');
      if (lang === 'en_UK') {
        items.style.direction = 'ltr';
      } else {
        items.style.direction = 'rtl';
      }
  }

  addType(passengerType) {
    if (this.passengerType.name !== '') {
    this.passengerTypeService.addNewPassengerType(passengerType).subscribe(
      done => {
        this.passengerTypeList.push(done);
        this.toastr.success(this.popUpMessages.typeAdded);
      },
      err => { this.toastr.error(this.popUpMessages.typeNotAdded); }
    );
    } else {
      this.toastr.warning(this.popUpMessages.enterNotEntered);
    }
  }

  delete(i) {
    this.passengerTypeService.deletePassagerType(this.passengerTypeList[i].id).subscribe(
      done => {this.toastr.success(this.popUpMessages.typeDeleted),
       this.passengerTypeList.splice(i, 1); },
       err => {
         this.toastr.error(this.popUpMessages.typeNotDeleted);
       }
       );
  }

  edit(i) {
    this.editIndex = i;
    this.editButtonClicked = true;
    this.passengerType.name = this.passengerTypeList[i].name;
    this.passengerType.id = this.passengerTypeList[i].id;
  }

  cancel() {
    this.editButtonClicked = false;
    this.passengerType = {
      id: '',
      name: ''
    };
  }

  save() {
    if (this.passengerType.name !== '') {
      this.passengerTypeService.updatePassengerType(this.passengerType).subscribe(
        done => {
          this.passengerTypeList[this.editIndex] = done;
          this.editButtonClicked = false;
          this.passengerType = {
            id: '',
            name: ''
          };
          this.toastr.success(this.popUpMessages.typeUpdated);
         },
        err => this.toastr.error(this.popUpMessages.typeNotUpdated)
      );
    } else {
      this.toastr.warning(this.popUpMessages.enterNotEntered);
    }
  }

}
