import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from './upload.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { arrival, transfer } from './uploadHeaders';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  arrivalListFile: FileList;
  travellistFile: FileList;

  popUpMessages = {
    fileUploaded: '',
    fileNotUploaded: '',
    dateNotValid: '',
    uploadArrivalList: '',
    statusText: {
      first: '',
      second: '',
      third: ''
    }
  };

  constructor(private toastr: ToastrService,
              private uploadService: UploadService,
              private translate: TranslateService) {
                this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                  this.getTranslations();
                });

                this.getTranslations();
               }

  ngOnInit() {
  }

  getTranslations() {
    this.translate.get('file-upload-pop-up.label-file-uploaded').subscribe(
      done => this.popUpMessages.fileUploaded = done
    );
    this.translate.get('file-upload-pop-up.label-file-not-uploaded').subscribe(
      done => this.popUpMessages.fileNotUploaded = done
    );
    this.translate.get('file-upload-pop-up.label-upload-arrival-list').subscribe(
      done => this.popUpMessages.uploadArrivalList = done
    );
    this.translate.get('file-upload-pop-up.label-date-not-valid').subscribe(
      done => this.popUpMessages.dateNotValid = done
    );
    this.translate.get('file-upload-pop-up.label-status-text-first').subscribe(
      done => this.popUpMessages.statusText.first = done
    );
    this.translate.get('file-upload-pop-up.label-status-text-second').subscribe(
      done => this.popUpMessages.statusText.second = done
    );
    this.translate.get('file-upload-pop-up.label-status-text-third').subscribe(
      done => this.popUpMessages.statusText.third = done
    );
  }

  arrivalListFileChange(event) {
    this.arrivalListFile = event.target.files;
  }

  travelListFileChange(event) {
    this.travellistFile = event.target.files;
  }

  uploadArrivalListFile() {
    if (this.arrivalListFile.length > 0) {
      let file: File = this.arrivalListFile[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.uploadService.uploadArrivalFile(formData).subscribe(
        done => {
          this.arrivalListFile = null;
          document.getElementById('upload-arrival-list')['value'] = '';
          this.toastr.success( this.popUpMessages.fileUploaded);
        },
        error => {
          this.arrivalListFile = null;
          document.getElementById('upload-arrival-list')['value'] = '';
          if (error.status === 412) {
            // WHEN some cell is not in correct format
            this.toastr.error(this.popUpMessages.statusText.first + ' ' + error.error.row_index + ' ' +
                              this.popUpMessages.statusText.second + ' ' + arrival[error.error.column_index - 1].column_title + ' ' +
                              this.popUpMessages.statusText.third);
          } else {
            // OTHER errors
            this.toastr.error( this.popUpMessages.fileNotUploaded);
          }
        });
    }
  }

  uploadTransferListFile() {
    if (this.travellistFile.length > 0) {
      let file: File = this.travellistFile[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.uploadService.uploadTransferFile(formData).subscribe(
        done => {
          this.travellistFile = null;
          document.getElementById('upload-transfer-list')['value'] = '';
          this.toastr.success( this.popUpMessages.fileUploaded);
        },
        error => {
          this.travellistFile = null;
          document.getElementById('upload-transfer-list')['value'] = '';
          if (error.status === 412) {
            // WHEN some cell is not in correct format
            this.toastr.error(this.popUpMessages.statusText.first + ' ' + error.error.row_index + ' ' +
                              this.popUpMessages.statusText.second + ' ' + transfer[error.error.column_index - 1].column_title + ' ' +
                              this.popUpMessages.statusText.third);
          } else if (error.status === 409) {
            // WHEN transfer list is not uploaded first
            this.toastr.error( this.popUpMessages.uploadArrivalList);
          } else {
            // OTHER errors
            this.toastr.error( this.popUpMessages.fileNotUploaded);
          }
        });
    }
  }

}
