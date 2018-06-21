import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  data;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  data1: {}[];

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      // , {header: 1}
      // , {header: 1, blankrows: true, range: 120, raw: true}
      this.data = XLSX.utils.sheet_to_json(ws, {header: 1, raw: true});
    //  this.data = XLSX.utils.sheet_to_html(ws, {id: true, editable: 'true'})
      console.log(this.data);
      console.log(typeof(this.data));
      // this.createJsonArray(this.data)
    };
    reader.readAsBinaryString(target.files[0]);
  }


  // createJsonArray(data) {
  //   let len = data[0].length;
  //   for (let i = 0; i < data.length; i++) {
  //     if (len < data[i].length) {
  //       len = data[i].length;
  //     }
  //   }
  //   for (let i = 0; i < data.length; i++) {
  //          for (let j = data[i].length; j < len; j++) {
  //               data[i][j] = '';
  //     }
  //   }
  //   console.log(len)
  // }

  // sendID(params) {
  //   console.log(params)
  // }

  fileUploaded() {
    setTimeout(() => {
        this.toastr.success('File Uploaded!');
    }, 1000);
  }


  onFileChange1(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data1 = XLSX.utils.sheet_to_json(ws, {header: 1});
      console.log(this.data1);
      console.log(typeof(this.data1));
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
