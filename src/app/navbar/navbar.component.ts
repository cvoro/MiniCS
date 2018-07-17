import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  admin;
  loggedIn;
  loggedREP;

  popUpMessages = {
    loggedOut: ''
  };

  constructor(private translate: TranslateService,
              private router: Router,
              private toastr: ToastrService) {

                this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
                  this.getTranslations();
                });
                this.getTranslations();

    
    if (localStorage.getItem('lang') !== null) {
      translate.use(localStorage.getItem('lang'));
    } else {
      translate.use('fa_FA');
    }
    setInterval(() => {
      if (localStorage.getItem('role') === 'ADMIN') {
        this.admin = true;
        this.loggedIn = true;
      } else {
        this.admin = false;
        this.loggedIn = false;
      }

      if (localStorage.getItem('role')) {
        this.loggedIn = true;
      }

      if (localStorage.getItem('role') !== 'rep') {
        this.loggedREP = false;
      } else {
        this.loggedREP = true;
      }
    }, 300);
  }

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.toastr.error(this.popUpMessages.loggedOut);
  }

  getTranslations() {
    this.translate.get('nab-bar-pop-up.label-logged-out').subscribe(
      done => this.popUpMessages.loggedOut = done
    );
  }

  ngOnDestroy() {
    // localStorage.removeItem('token');
    // localStorage.removeItem('role');
  }
}
