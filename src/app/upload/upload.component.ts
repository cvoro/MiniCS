import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from './upload.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


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
    uploadArrivalList: ''
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
        data => {
          console.log('success'),
          this.arrivalListFile = null;
          document.getElementById('upload-arrival-list')['value'] = '';
          this.toastr.success( this.popUpMessages.fileUploaded);
        },
        error => {
          console.log(error);
          if (error.status === 412) {
            // WHEN date and time in excel is not valid
            this.toastr.error( this.popUpMessages.dateNotValid);
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
        data => {
          console.log('success'),
          this.travellistFile = null;
          document.getElementById('upload-transfer-list')['value'] = '';
          this.toastr.success( this.popUpMessages.fileUploaded);
        },
        error => {
          console.log(error);
          if (error.status === 412) {
            // WHEN date and time in excel is not valid
            this.toastr.error( this.popUpMessages.dateNotValid);
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
