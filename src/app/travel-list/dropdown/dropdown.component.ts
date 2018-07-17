import { Component, OnInit, Input } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  types;

  @Input() value;

  constructor(private dropdownService: DropdownService,
              private toastr: ToastrService) {

   }

   ngOnInit() {
    // this.dropdownService.getAllPassegerTypes().subscribe(
    //   done => {
    //     this.types = done;
    //   },
    //   err => {
    //     this.toastr.error('Passenger types not loaded');
    //   }
    // );
   }

}
