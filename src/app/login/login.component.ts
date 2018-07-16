import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

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

  popUpMessages = {
    loggedIn: '',
    logInFail: ''
  };

  constructor(private translate: TranslateService,
      private router: Router,
      private toastr: ToastrService,
      private loginService: LoginService) {
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
    this.translate.get('login-pop-up.label-logged-in').subscribe(
      done => this.popUpMessages.loggedIn = done
    );
    this.translate.get('login-pop-up.label-logg-in-fail').subscribe(
      done => this.popUpMessages.logInFail = done
    );
  }

  login(data) {
    this.spinnerLoading = true;
    this.loginService.login(data).subscribe(
      res => {
      localStorage.setItem('token', res['token']);
      localStorage.setItem('role', res['role'][0]['authority']);
        this.spinnerLoading = false;
        this.router.navigate(['/wellcome']);
        this.toastr.success(this.popUpMessages.loggedIn);
      },
      err => {
        this.spinnerLoading = false;
        this.toastr.error(this.popUpMessages.logInFail);
      }
    );
  }

  changeDirection(lang) {
    if (lang === 'en_UK') {
      document.getElementById('input-username').style.direction = 'ltr';
      document.getElementById('input-password').style.direction = 'ltr';
    } else {
      document.getElementById('input-username').style.direction = 'rtl';
      document.getElementById('input-password').style.direction = 'rtl';
    }
  }

}
