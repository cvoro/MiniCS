import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  spinnerLoading = false;
  data = {
    username: '',
    password: ''
  };
  constructor(private translate: TranslateService, private router: Router, private toastr: ToastrService) {
    translate.setDefaultLang('fa_FA');
  }

  ngOnInit() {
  }

  login(data) {
    this.spinnerLoading = true;
    localStorage.setItem('loggedInAs', data.username);
    setTimeout(() => {
      this.spinnerLoading = false;
      this.router.navigate(['/wellcome']);
      this.toastr.success('Logged in!');
    }, 1500);
  }
  
  addStyle() {
    document.getElementById("input-username").style.direction = "ltr"
    document.getElementById("input-password").style.direction = "ltr"
  }

}
