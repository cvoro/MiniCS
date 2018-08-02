import { Component, OnInit } from '@angular/core';
import { hotels, pax } from './leisureMock';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LeisureConsultantsService } from './leisure-consultants.service';
import { ToastrService } from 'ngx-toastr';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-leisure-consultants',
  templateUrl: './leisure-consultants.component.html',
  styleUrls: ['./leisure-consultants.component.css']
})
export class LeisureConsultantsComponent implements OnInit {
hotelsList = hotels;
leisureConsultantsList = pax;

consultant = {
  username: '',
  password: '',
  first_Name: '',
  last_Name: ''
};

popUpMessages = {
  consultantNotLoaded: '',
  consultantUpdated: '',
  consultantNotUpdated: '',
  consultantDeleted: '',
  consultantNotDeleted: '',
  consultantAdded: '',
  consultantNotAdded: ''
};

addedConslutants = [];

  constructor(private translate: TranslateService,
              private leisureService: LeisureConsultantsService,
              private toastr: ToastrService) {
                this.leisureService.getAllLeisureConsultants().subscribe(
                  done => this.addedConslutants = done,
                  err => this.toastr.warning(this.popUpMessages.consultantNotLoaded)
                );
                this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                  this.getTranslations();
                });
                this.getTranslations();
  }

  public settings = {
    add: {
      addButtonContent: '<i class="fas fa-plus"></i>',
      createButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="fas fa-pencil-alt"></i>',
      saveButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="fas fa-ban" ></i>',
      confirmDelete: true
    },
    columns: {
      first_Name: {
         title: 'First name'
      },
      last_Name: {
        title: 'Last name'
      },
      username: {
        title: 'Username'
      },
      password: {
       title: 'Password',
       type: 'custom',
       renderComponent: PasswordComponent,
       editor: {
         type: 'text'
       }
      }
    }
  };

  ngOnInit() {
    this.changeDirection(this.translate.currentLang);

    this.translate.onLangChange.subscribe(lang => {
      this.changeDirection(lang.lang);
    });
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

  getTranslations() {
    this.translate.get('leisure-consultants-pop-up.label-consultants-not-loaded').subscribe(
      done => this.popUpMessages.consultantNotLoaded = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-added').subscribe(
      done => this.popUpMessages.consultantAdded = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-not-added').subscribe(
      done => this.popUpMessages.consultantNotAdded = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-deleted').subscribe(
      done => this.popUpMessages.consultantDeleted = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-not-deleted').subscribe(
      done => this.popUpMessages.consultantNotDeleted = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-updated').subscribe(
      done => this.popUpMessages.consultantUpdated = done
    );
    this.translate.get('leisure-consultants-pop-up.label-consultant-not-updated').subscribe(
      done => this.popUpMessages.consultantNotUpdated = done
    );
  }

  addConsultant(consultant) {
    this.addedConslutants.push(consultant);
  }

  updateRecord(event) {
    this.leisureService.updateLeisureConsultant(event.newData).subscribe(
      done => {
        this.toastr.success(this.popUpMessages.consultantUpdated);
        event.confirm.resolve(event.source.newData);
      },
      err => {
        this.toastr.error(this.popUpMessages.consultantNotUpdated);
        event.confirm.resolve(event.source.data);
      }
    );
  }

  deleteRecord(event) {
    this.leisureService.deleteLeisureConsultant(event.data.id).subscribe(
      done => {
        this.toastr.success(this.popUpMessages.consultantDeleted);
        event.confirm.resolve(event.source.newData);
      },
      err => {
        this.toastr.error(this.popUpMessages.consultantNotDeleted);
      }
    );
  }

  createRecord(event) {
    this.leisureService.addNewLeisureConsultant(event.newData).subscribe(
      done => {
        this.toastr.success(this.popUpMessages.consultantAdded);
        event.confirm.resolve(event.source.newData);
      },
      err => {
        this.toastr.error(this.popUpMessages.consultantNotAdded);
      }
    );
  }


}
