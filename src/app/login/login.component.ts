import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  constructor(private translate: TranslateService, private router: Router) {
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
    }, 1500);
  }

}
